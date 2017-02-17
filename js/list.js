(function(exports) {

  function List() {
    this.articles = [];
  }

  List.prototype = {
    getArticles: function(){
      return this.articles;
    },
    newArticle: function(headline, summary, image_url, article_url){
      article = new Article(headline, summary, image_url, article_url);
      this.articles.push(article);
    }
  };

  exports.List = List;

})(this);
