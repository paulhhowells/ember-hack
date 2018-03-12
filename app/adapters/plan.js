import ApplicationAdapter from './application';
import $ from 'jquery';

export default ApplicationAdapter.extend({
  // Provide the queryRecord method for use by store.queryRecord when server returns JSONAPI
  // with a single object for the primary data.
  queryRecord(modelName, query) {
    return $.getJSON('/api/plan');
  }
});
