import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './bench_index';


export const Search = ({benches, fetchBenches, updateFilter}) => (
  <div>
    <BenchMap benches={benches} updateFilter={updateFilter}/>
    <BenchIndex benches={benches} fetchBenches={fetchBenches}/>
  </div>
);
