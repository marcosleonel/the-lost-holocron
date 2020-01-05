const randomOptions = {
  description: 'Returns a random Jedi quote.',
  notes: 'The Force will choose the right message for you.',
  /**
   * Simply add the tags: ['api'] property to the route object for any endpoint you want
   * documenting.
   * @see https://www.npmjs.com/package/hapi-swagger#tagging-your-api-routes
   * */
  tags: ['api', 'random', 'quote'],
};

module.exports = randomOptions;
