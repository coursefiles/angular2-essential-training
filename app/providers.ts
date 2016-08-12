import { OpaqueToken } from '@angular/core';

export let lookupLists = {
  mediums: ['Movies', 'Series']
};

export let lookupListToken = new OpaqueToken('LookupList');
