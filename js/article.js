(function(exports) {

  function Article(headline, summary, image_url, article_url) {
    this.headline = headline;
    this.summary = summary;
    this.image_url = image_url;
    this.article_url = article_url;
  }

  Article.prototype = {
    getHeadline: function(){
      return this.headline;
    },
    getSummary: function(){
      return this.summary;
    },
    getImageUrl: function(){
      return this.image_url;
    },
    getFullText: function(){
      return this.article_url;
    }
  };

  exports.Article = Article;

})(this);
