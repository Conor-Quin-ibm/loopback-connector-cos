'use strict';

module.exports = require('should');

var DataSource = require('loopback-datasource-juggler').DataSource;



var config;

config = {
    host: "localhost",
    connector: "loopback-connector-cos",
    port: "4001",
    name: "cloud-object-storage",
    connector: "loopback-connector-cos",
    endpoint: "s3.us-south.objectstorage.softlayer.net",
    apiKeyId: "3c7HgonfQozurj8pMyAOb7e30J4cQwcb3zfbluVIGepq",
    serviceInstanceId: "crn:v1:bluemix:public:cloud-object-storage:global:a/cba9689daca44d268d830f372ba66c4e:e0934afb-5c33-44ee-be1b-681c1ea67924::",
    IBMSSEKPCustomerRootKeyCrn: "crn:v1:bluemix:public:kms:us-south:a/cba9689daca44d268d830f372ba66c4e:807b8bb0-c4d8-4a25-915d-9bd87d1686de:key:aa474fd7-c05a-4daa-b712-a7404b48ece6",
    location: "us-south-standard",
    bucket: "bucket44"
  };
  
//console.log(config);
global.config = config;

global.getDataSource = global.getSchema = function(customConfig) {
  var db = new DataSource(require('../../'), customConfig || config);
  return db;
  db.log = function(a) {
    console.log(a);
  };

  return db;
};
