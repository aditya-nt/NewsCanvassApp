import React, { Component } from 'react'
import { rdb } from '../../firebase'
import "./styles.css";



export default class ClatSidebar extends Component {
  constructor(props) {
    super(props)
    this.onDataChange = this.onDataChange.bind(this)
    // this.setActiveTab = this.setActiveTab.bind(this)
    this.state = {
      entries: [],
      db: rdb.ref("Pages/ClatPage/Tabs"),
      loaded: false,
    }
  }

  onDataChange(items) {
    let entries = [];

    items.forEach((item) => {
      let key = item.key;
      let data = item.val();
      entries.push({
        key: key,
        TabName: data.TabName,
        Section: data.Section,
      });
    })


    this.setState({
      entries: entries,
      loaded: true
    })


  }


  componentDidMount() {
    this.state.db.on("value", this.onDataChange)

    // this.props.setSection("Section")
  }

  componentWillUnmount() {
    this.state.db.off("value", this.onDataChange)
  }


  handleClick(index, section) {
    // console.log(index );
    this.props.setState({
      activeTab: index,
      section: section
    });
    // this.props.setSection(section)
  }

  planCard = (entry, index) => {
    return (

      <li className={this.props.activeTab === index ? " active" : null} key={index} onClick={() => this.handleClick(index, entry.Section)}>
        <a>{entry.TabName}</a>
      </li>
    )


  }





  render() {

    const { entries, loaded } = this.state

    // if(loaded)
    // this.props.setSection(entries[0].Section)

    // console.log("rrr",this.props.tabs)

    const filteredentries = entries && entries.filter(entry => this.props.tabs.includes(entry.TabName))


    return (
      <nav id="sidebar" className={this.props.isActive ? null : "active"}>
        <div className="sidebar-header">
          <h3 style={{ color: 'wheat' }}>CLAT Section</h3>
        </div>
        <ul className="list-unstyled components ">

          <li className={this.props.activeTab === -1 ? "active" : null} onClick={() => this.handleClick(-1, "Section00")}>
            <a href="#">Dashboard</a>
          </li>
          {filteredentries &&
            filteredentries.map((entry, index) => (
              this.planCard(entry, index)
            ))}


          <li className={this.props.activeTab === 100 ? "active" : null} onClick={() => this.handleClick(100, "Section100")}>
            <a href="#">My Account</a>
          </li>



          {/* <p>Dummy Heading</p> */}





        </ul>
        {/* <ul className="list-unstyled CTAs">
        <li>
          <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
        </li>
        <li>
          <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
        </li>
      </ul> */}
      </nav>
    )
  }
}




