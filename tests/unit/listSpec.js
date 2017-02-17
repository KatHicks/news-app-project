testExists(List, "List object");

var list = new List();
list.newArticle("Breaking News", "summary", "image_url", "article_url");

testArrayLength(list.getArticles(), 1, "article array")
testResult(list.getArticles(), list.articles, "list.getArticles()");

var listTest = new List();
testChangeBy(listTest.getArticles().length, listTest.newArticle("Breaking News", "summary", "image_url", "article_url"), listTest.getArticles().length, 1, "listTest.newArticle()");
