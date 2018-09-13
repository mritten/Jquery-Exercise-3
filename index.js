const url = 'https://dwolverton.github.io/fe-demo/data/blog-posts.json'
  
$.get('https://dwolverton.github.io/fe-demo/data/blog-posts.json', (responseData) => {
  console.log(responseData.title);
  console.log(responseData.language);
  console.log(responseData.posts.length);

  responseData.posts.forEach(post => {
    console.log(post.title);
    post.tags.forEach(tag => {
      console.log(tag);
    });
  });
});   
