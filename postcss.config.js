module.exports = {
    ident: 'postcss',
    plugins: [
        // 监听了@import，可以使在less文件中引用css文件时先走postcss处理，css-loader的importLoaders同作用
        // 但是modules模式下，还可以处理在less文件中引用css文件时，正常将css文件中的局部样式一同export出去
        require("postcss-import")(),
        // require("autoprefixer")(),
        // 新版本替换了nextcss，同样包含autoprefixer
        require("postcss-preset-env")(),
        // 压缩
        require("cssnano")(),
        // 生成雪碧图插件，此项目选择使用webpack-spritesmith，所以暂时注释掉
        // require("postcss-sprites")({
        //     // 初始雪碧图的位置，未压缩前的图片
        //     spritePath: "dist/assets/imgs/sp/",
        //     retina: true,
        //     filterBy: function(image){
        //         const flag = /\/image\/sp\//.test(image.url)
        //         return flag ? Promise.resolve() : Promise.reject()
        //     },
        //     groupBy: [
        //         function(image){
        //             const flag = /\/sp1\//.test(image.url)
        //             return flag ? Promise.resolve("sprite1") : Promise.reject()
        //         },
        //         function(image){
        //             const flag = /\/sp2\//.test(image.url)
        //             return flag ? Promise.resolve("sprite2") : Promise.reject()
        //         }
        //     ]
        // })
    ]
}