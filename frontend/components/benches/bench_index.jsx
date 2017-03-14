import React from 'react';
import { BenchIndexItem } from './bench_index_item';


class BenchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchBenches();
  }

  render() {
    let benches = [];
    if (this.props.benches) {
      benches = Object.keys(this.props.benches).map( id => this.props.benches[id]);
    }
    // debugger;
    return(
      <section className="benchIndex">
        <ul>
          {benches.map(bench => <BenchIndexItem key={bench.id} bench={bench} />)}
        </ul>
      </section>
    );

  }
}

export default BenchIndex;
