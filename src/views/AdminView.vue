<template>
  <div>
    <navAdmin/>
    <coverAdmin/>
    <stock/>
    <orderTable/>
    <footerpag/>
  </div>
</template>

<script>
// @ is an alias to /src
import navAdmin from '@/components/navAdmin.vue'
import coverAdmin from '@/components/coverAdmin.vue'
import stock from '@/components/stock.vue'
import orderTable from '@/components/orderTable.vue'
import footerpag from '@/components/footer.vue'

export default {
  name: 'AdminView',
  components: {
    navAdmin,
    coverAdmin,
    stock,
    orderTable,
    footerpag,
  }
}
</script>