<template lang="pug">
  section.where
    .action-con
      ButtonGroup
        Button(:type="hasType", @click='handleToggle') 并且
        Button(:type="hasReverseType", @click='handleToggle') 或者
    .conditions-con(@click.stop="")
      Form(ref='confitions', :model='confitions')
        FormItem(v-for="(item,index) in confitions.items", :key="index")
          Row
            Col(span='6')
              Select(@on-change='handleCriterias', :disabled='selectField.length===0' ,v-model="item.selectedNameOne")
                OptionGroup(v-if="selectedTabName.length > 1", v-for="(selectedName,nameIndex) in selectedTabName", :label='selectedName', :key='nameIndex')
                  Option(v-for="(optionItem,itemIndex) in whereData[selectedName+'Field']", :value='`${selectedName}-${index}-${optionItem.column_name}-${optionItem.colum_type}`', :key="itemIndex") {{optionItem.column_name}}
                Option(v-if="selectedTabName.length <= 1", v-for="(radioItem,radioIndex) in whereData", :value='`${index}-${radioItem.column_name}-${radioItem.colum_type}`', :key='radioIndex') {{radioItem.column_name}}
            Col(span='6', v-if="item.Remaining")
              Select(v-model="item.queryCriteria", v-if="item.type==='String'", :disabled='selectField.length===0')
                Option(v-for="(query,index) in stringCriteria", :value="query.value", :key="query.label") {{ query.label }}
              Select(v-model="item.queryCriteria", v-else-if="item.type==='Boolean'", :disabled='selectField.length===0')
                Option(v-for="(query,index) in boolCriteria", :value="query.value", :key="query.label") {{ query.label }}
              Select(v-model="item.queryCriteria", v-else,   :disabled='selectField.length===0')
                Option(v-for="(query,index) in defaultCriteria", :value="query.value", :key="query.label") {{ query.label }}
              //- span(v-if="item.type==='String'") string
              //- span(v-else-if="item.type==='Boolean'") boolean
              //- span(v-else) default
              //- Select(v-model="item.queryCriterias",   :disabled='selectField.length===0')
                //- Option(v-for="(query,index) in item.queryCriterias", :value="query.value", :key="index") {{ query.label }}
            Col(span='6', v-if="item.Remaining && item.showValue")
              Input(placeholder="请输入内容", v-model="item.copyValue", @on-blur.stop='handleValue(index)', @on-focus.stop="handleFocus(index)" :disabled='selectField.length===0')
              .cityModelShow(v-if="item.cityModelShow")
                .item(v-for="item in cityLists", :key="item.id", @click="cityModelClick(index,item.name)") {{item.name}}
            Col(span='1')
              Icon(type='ios-trash-outline', @click='handleDelete(index)')
      Row
        Col(span='6')
          Button(type='dashed', @click='handleAdd', icon="plus") 新增查询条件
</template>

<script>
export default {
  name: 'where',
  props: {
    whereData: {
      type: [Array, Object, String]
    },
    selectedTabName: {
      type: [Array, String]
    },
    selectField: {
      type: [Array, String]
    }
  },
  data() {
    return {
      showType: true,
      character: 'and',
      cityLists: [
        { id: 0, name: '广东省深圳市' },
        { id: 1, name: '上海市' },
        { id: 2, name: '浙江省杭州市' },
        { id: 3, name: '北京市' },
        { id: 4, name: '湖北省武汉市' },
        { id: 5, name: '广东省广州市' }
      ],
      confitions: {
        items: [
          {
            tabName: '',
            field: '',
            queryCriteria: '',
            value: '',
            copyValue: '',
            Remaining: true,
            showValue: true,
            type: '',
            queryCriterias: [],
            selectedNameOne: '',
            cityModelShow: false,
          }
        ]
      },
      productFields: [],
      shopFields: [],
      // queryCriterias: [],
      stringCriteria: [
        {
          value: ' like ',
          label: '相似'
        },
        {
          value: '=',
          label: '等于'
        },
        {
          value: ' is not ',
          label: '不等于'
        },
        {
          value: ' in ',
          label: '包含'
        },
        {
          value: ' not in ',
          label: '不包含'
        }
      ],
      defaultCriteria: [
        {
          value: '=',
          label: '等于'
        },
        {
          value: '>',
          label: '大于'
        },
        {
          value: '<',
          label: '小于'
        },
        {
          value: '>=',
          label: '大于等于'
        },
        {
          value: '<=',
          label: '小于等于'
        },
        {
          value: ' is not ',
          label: '不等于'
        }
      ],
      boolCriteria: [
        {
          value: '="true"',
          label: '真'
        },
        {
          value: '="false"',
          label: '假'
        }
      ],
      focusItem: 0
    }
  },
  computed: {
    hasType() {
      return this.showType ? 'primary' : 'ghost'
    },
    hasReverseType() {
      return !this.showType ? 'primary' : 'ghost'
    },
  },
  mounted() {
    this.$nextTick(() => {
      let _this = this
      document.addEventListener('click', e => {
        _this.confitions.items.map(item => {
          if (item.cityModelShow) {
            item.cityModelShow = false;
          }
          return item;
        });
      })
    });
  },
  methods: {
    handleDelete(index) {
      console.log(this.confitions.items[index]);
      const retList = [];
      const data = this.confitions.items;

      for (let i = 0; i < data.length; i += 1) {
        const item = data[i];
        if (i !== index) {
          let name = '';
          if (i < index) {
            name = item.selectedNameOne;
          } else if (item.selectedNameOne) {
            const str = item.selectedNameOne.split('-');
            if (this.selectedTabName.length > 1) {
              name = `${str[0]}-${i - 1}-${str[2]}-${str[3]}`;
            } else {
              name = `${i - 1}-${str[1]}-${str[2]}`;
            }
          }
          retList.push({
            ...item,
            selectedNameOne: name,
          });
        }
      }

      this.confitions.items = retList;
      console.log('index', this.confitions.items);
    },
    handleToggle() {
      this.showType = !this.showType
      if (event.target.innerHTML === '并且') {
        this.character = 'and'
      } else {
        this.character = 'or'
      }
    },
    handleAdd() {
      this.confitions.items.push({
        tabName: '',
        field: '',
        queryCriteria: '',
        value: '',
        copyValue: '',
        Remaining: false,
        showValue: false,
        type: '',
        queryCriterias: [],
        cityModelShow: false,
      })
      console.log(this.confitions.items);
    },
    handleCriterias(value) {
      console.log(666, value);
      const queryParam = value.split('-')
      if (queryParam.length > 3) {
        this.focusItem = queryParam[1]
        this.confitions.items[this.focusItem].tabName = queryParam[0]
        this.confitions.items[this.focusItem].field = queryParam[2]
        this.confitions.items[this.focusItem].Remaining = true
        if (queryParam[3] === 'String') {
          // this.confitions.items[this.focusItem].queryCriterias = this.stringCriteria
          this.confitions.items[this.focusItem].showValue = true
          this.confitions.items[this.focusItem].type = 'String'
        } else if (queryParam[3] === 'Boolean') {
          // this.confitions.items[this.focusItem].queryCriterias = this.boolCriteria
          this.confitions.items[this.focusItem].showValue = false
          this.confitions.items[this.focusItem].type = 'Boolean'
        } else {
          // this.confitions.items[this.focusItem].queryCriterias = this.defaultCriteria
          this.confitions.items[this.focusItem].showValue = true
          this.confitions.items[this.focusItem].type = ''
        }
      } else {
        this.focusItem = queryParam[0]
        this.confitions.items[this.focusItem].field = queryParam[1]
        this.confitions.items[this.focusItem].Remaining = true
        if (queryParam[2] === 'String') {
          // this.confitions.items[this.focusItem].queryCriterias = this.stringCriteria
          // console.log(this.confitions.items[this.focusItem].queryCriterias)
          this.confitions.items[this.focusItem].showValue = true
          this.confitions.items[this.focusItem].type = 'String'
        } else if (queryParam[2] === 'Boolean') {
          // this.confitions.items[this.focusItem].queryCriterias = this.boolCriteria
          this.confitions.items[this.focusItem].showValue = false
          this.confitions.items[this.focusItem].type = 'Boolean'
        } else {
          // this.confitions.items[this.focusItem].queryCriterias = this.defaultCriteria
          this.confitions.items[this.focusItem].showValue = true
          this.confitions.items[this.focusItem].type = ''
        }
      }
      // this.queryCriterias = []
      this.confitions.items[this.focusItem].queryCriteria = ''
      this.confitions.items[this.focusItem].value = ''
      this.confitions.items[this.focusItem].copyValue = ''
    },
    handleValue(index) {
      const conditionsArr = [' not in ', ' in ']
      if (conditionsArr.includes(this.confitions.items[index].queryCriteria)) {
        const containsValue = this.confitions.items[index].copyValue.split(',')
        let showValue = '('
        containsValue.forEach((item, index) => {
          if (index === containsValue.length - 1) showValue = showValue + `'${item}'`
          else showValue = showValue + `'${item}',`
        })
        this.confitions.items[index].value = showValue + ')'
      } else {
        this.confitions.items[index].value = this.confitions.items[index].copyValue
      }
    },
    handleFocus(index) {
      let field = this.confitions.items[index].field
      if (field === 'city') {
        this.$set(this.confitions.items[index], 'cityModelShow', true)
      }
    },
    cityModelClick(index, name) {
      this.confitions.items[index].copyValue = name
      this.confitions.items[index].value = name
      this.confitions.items[index].cityModelShow = false
    }
  }
}
</script>

<style lang="scss">
.where {
  display: inline-block;
  width: 88%;
  .ivu-form-item {
    margin-bottom: 0;
  }
  .ivu-form-item-content {
    margin-bottom: 10px;
  }
  .ivu-col-span-6 {
    margin-right: 10px;
    position: relative;
    .ivu-btn {
      margin-top: 20px;
      width: 100%;
    }
  }
  .ivu-btn-group {
    width: 20%;
    .ivu-btn {
      margin: 0 !important;
    }
  }
  .cityModelShow {
    position: absolute;
    top: 35px;
    left: 0;
    z-index: 333;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    .item {
      cursor: pointer;
      padding: 0 10px;
      &:hover {
        background: #f3f3f3;
      }
    }
  }
}
.action-con {
  margin-bottom: 20px;
}
</style>

