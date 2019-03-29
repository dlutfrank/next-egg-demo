'use strict';
module.exports = app => {
  const { router, controller} = app;
  router.get('/api/test', controller.ssr.test);
  router.get('/p/:id', controller.ssr.post);
  router.get('/*',controller.ssr.index);
};