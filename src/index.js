import _ from 'lodash';
import postal from 'postal';
import fedX from 'postal.federation';
import reqrep from 'postal.request-response';
import xFrame from './postal.xframe';
import Deferred from './deferred';

postal.configuration.promise = {
  createDeferred() {
    return new Deferred();
  },
  getPromise(dfd) {
    return dfd.promise;
  },
  fulfill: 'resolve',
  fail: 'reject'
}

export default postal;

