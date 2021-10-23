const Post =  require("../model/postModel")

exports.getAllPosts = async (req,res,next) => {
    try {
        const posts = await Post.find()
        res.status(200).json({
                status: "exito",
                results: posts.length,
                data: {
                    posts,
                },
            });
    } catch (e) {
        res.status(400).json({
            status: "falla",
        });
    }
};

exports.getOnePost = async (req,res,next) => {
    try {
        const posts = await Post.findById(req.params.id)
        res.status(200).json({
            status: "exito",
            results: posts.length,
            data: {
                posts,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: "falla",
        });
    }
};

exports.createPost = async (req,res,next) => {
    try {
        const posts = await Post.create(req.body)
        res.status(200).json({
            status: "exito",
            results: posts.length,
            data: {
                posts,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: "falla",
        });
    }
};

exports.updatePost = async (req,res,next) => {
    try {
        const posts = await Post.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            status: "exito",
            results: posts.length,
            data: {
                posts,
            },
        });
    } catch (e) {
        res.status(400).json({
            status: "falla",
        });
    }
};

exports.deletePost = async (req,res,next) => {
    try {
        const posts = await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "exito",
            results: posts.length,
        });
    } catch (e) {
        res.status(400).json({
            status: "falla",
        });
    }
}