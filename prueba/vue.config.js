module.exports= {
    publicPath:'/vue-pages',
    css:{
        loaderOptions:{
            sass :{
               additionalData:`@import "@/assets/_shared.scss";`,
            }
        }
    }
}