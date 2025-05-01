import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
title:{
    type:String,
    require:[true,"Title is required"]
},
content:{
    type:String,
    require:[true,"content is required"]
},

},
{timestamps:true})

const Blog=mongoose.models.Blog||mongoose.model("Blog",blogSchema);

export default Blog
