<template lang="pug">
  section.where
    .action-con
      ButtonGroup
        Button(:type="hasType", @click='handleToggle') 并且
        Button(:type="hasReverseType", @click='handleToggle') 或者
      Button(type='primary', @click='handleAdd',style='marginLeft:10px') 添加新行
    .conditions-con
      Form(ref='confitions', :model='confitions')
        FormItem(v-for="(item,index) in confitions.items", :key="index")
          Row
            Col(span='7')
              Select(style="width:300px", @on-change='handleCriterias')
                OptionGroup(label='productField')
                  Option(v-for="(field,fieldIndex) in productFields", :value='`productField-${index}-${field.column_name}-${field.colum_type}`', :key="fieldIndex") {{ field.column_name }}
                OptionGroup(label='shopField')
                  Option(v-for="(shop,shopIndex) in shopFields", :value='`shopField-${index}-${shop.column_name}-${shop.colum_type}`', :key="shopIndex") {{ shop.column_name }}
            Col(span='7', v-if="item.Remaining")
              Select(clearable, ref="store",  @on-change='changeCriterias',style='width:300px')
                Option(v-for="(query,index) in queryCriterias", :value="query.value", :key="index") {{ query.label }}
            Col(span='7', v-if="item.Remaining")
              Input(placeholder="请输入内容", @on-blur='handleContent')
    Button(@click='handleStatement') 查看
</template>

<script>
export default {
  name: 'where',
  props: {
    data: {
      type: [Object, String]
    }
  },
  data() {
    return {
      showType: true,
      character:'',
      confitions: {
        items: [
          {
            field: '',
            queryCriteria: '',
            value: '',
            Remaining: true
          }
        ]
      },
      productFields: [],
      shopFields: [],
      queryCriterias: [],
      stringCriteria: [
        {
          value: '=',
          label: '等于'
        },
        {
          value: '!=',
          label: '不等于'
        },
        {
          value: 'in',
          label: '包含'
        },
        {
          value: 'not in',
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
          value: '!=',
          label: '不等于'
        }
      ],
      boolCriteria: [
        {
          value: 'true',
          label: '真'
        },
        {
          value: 'false',
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
    }
  },
  methods: {
    handleToggle() {
      this.showType = !this.showType
      if(event.target.innerHTML==='并且'){
        this.character='and'
      }else{
        this.character='or'
      }
    },
    handleAdd() {
      this.confitions.items.push({
        field: '',
        queryCriteria: '',
        value: '',
        Remaining: false
      })
    },
    handleCriterias(value) {
      const queryParam = value.split('-')
      this.focusItem = queryParam[1]
      this.confitions.items[this.focusItem].Remaining = true
      this.confitions.items[this.focusItem].field = queryParam[2]
      this.queryCriterias = []
      if (queryParam[3] === 'String') {
        this.queryCriterias = this.stringCriteria
      } else if (queryParam[3] === 'Boolean') {
        this.queryCriterias = this.boolCriteria
      } else {
        this.queryCriterias = this.defaultCriteria
      }
    },
    handleStatement() {
      console.log(this.confitions.items)
      this.confitions.items.forEach((item,index) => {
        console.log(index)
        if(index===this.confitions.items.length-1)
      })
    },
    handleContent() {
      this.confitions.items[this.focusItem].value = event.target.value
    },
    changeCriterias(value) {
      this.confitions.items[this.focusItem].queryCriteria = value
    }
  },
  mounted() {
    this.productFields = this.data.productField
    this.shopFields = this.data.shopField
  }
}
</script>

<style lang="scss">
.where {
  flex-grow: 20;
  .ivu-form-item {
    margin-bottom: 10px;
  }
}
.action-con {
  margin-bottom: 10px;
}
</style>

