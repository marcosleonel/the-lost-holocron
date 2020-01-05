const quotesByMasterOptions = {
  description: 'Return the quotes of a specific master.',
  notes: 'Choose a master from who you will recieve wisdom.',
  /**
   * Simply add the tags: ['api'] property to the route object for any endpoint you want documenting
   * @see https://www.npmjs.com/package/hapi-swagger#tagging-your-api-routes
   * */
  tags: ['api', 'masters'],
};

module.exports = quotesByMasterOptions;
