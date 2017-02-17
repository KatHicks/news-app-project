testExists(Article, "article");

var article = new Article("Breaking News", "summary", "image_url", "article_url");

testResult(article.getHeadline(), "Breaking News", "articleTest.getHeadline()");

// testResult(article.returnHeadline(), "Breaking News", "articleTest.getHeadline()");


// testResult(articleTest.getImage(), "test_url", "articleTest.getImage()");
