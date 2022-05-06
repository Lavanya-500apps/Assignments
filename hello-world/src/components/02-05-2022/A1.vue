<template>
<div>
    <p>{{diameter()}}</p>
    <p>{{perimeter()}}</p>
    

</div>
  
</template>

<script>
export default {
    name:"CiRcle",
    data() {
        return{
            radius:60,
            
           // diameter: () => this.radius*2,
            // perimeter: () => 2 * Math.PI * this.radius,
            


        };
    },
    methods: {
        diameter()
           {
            return this.radius*2 },
        
        perimeter()
         {
            return 2*Math.PI*this.radius },
    
    }
    
};
</script>