<template>
  <div>
    <navclient/>
    <cover/>
    <us/>
    <reviews/>
    <cakes/>
    <order/>
    <footerpag/>
  </div>
</template>

<script>
// @ is an alias to /src
import cover from '@/components/cover.vue'
import us from '@/components/usSection.vue'
import reviews from '@/components/reviewsSection.vue'
import cakes from '@/components/cakesSection.vue'
import order from '@/components/orderSection.vue'
import footerpag from '@/components/footer.vue'
import navclient from '@/components/navClient.vue'

export default {
  name: 'HomeView',
  components: {
    navclient,
    cover,
    us,
    reviews,
    cakes,
    order,
    footerpag,
  }
}
</script>
