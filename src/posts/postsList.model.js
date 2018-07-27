// only used when posts.service is in es6mode;
class PostsListModel {
    constructor(posts){
        this.pinned = [];
        this.recent = [];
        
        if(posts && posts.length > 0){
            this.initialize(posts);
        }
    }

    initialize(posts){
        posts.forEach(p => {
            if(p.type === 'pinned'){
                this.pinned.push(p);
            }                
            if(p.type === 'recent'){
                this.recent.push(p);
            }
        });
    }
}

export default PostsListModel;