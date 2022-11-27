import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {

  // articles= [

  //   {
  //     "source": { "id": null, "name": "CNBC" },
  //     "author": "Holly Ellyatt",
  //     "title": "Russia set to begin massive military drills with Belarus; U.S. slams 'escalatory' action - CNBC",
  //     "description": "Russia is set to begin 10 days of military exercises with its ally Belarus as tensions remain high over a large build-up of troops along the Ukraine border.",
  //     "url": "https://www.cnbc.com/2022/02/10/russia-set-to-begin-massive-military-drills-with-belarus.html",
  //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/107013437-1644478952090-gettyimages-1238340954-ts12234c.jpeg?v=1644479007",
  //     "publishedAt": "2022-02-10T09:07:20Z",
  //     "content": "S-400 Triumf air defence missile systems during the Allied Resolve 2022 joint military drills by Belarusian and Russian troops. The military exercise is being held as part of the second phase of test… [+6623 chars]"
  //   },
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Jeremy Harlan, CNN",
  //     "title": "Suspect in Colorado church shooting is killed by officers following a crime spree, police say - CNN",
  //     "description": "A man suspected of killing a woman and injuring two other people last week inside a church in Aurora, Colorado, was killed by police officers Wednesday night after he shot a man, carjacked two vehicles and robbed a store, authorities said.",
  //     "url": "https://www.cnn.com/2022/02/10/us/colorado-church-shooting-suspect-killed/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220210015139-colorado-church-shooting-suspect-scene-super-tease.jpg",
  //     "publishedAt": "2022-02-10T07:10:00Z",
  //     "content": "(CNN)A man suspected of killing a woman and injuring two other people last week inside a church in Aurora, Colorado, was killed by police officers Wednesday night after he shot a man, carjacked two v… [+1630 chars]"
  //   },
  //   {
  //     "source": { "id": "independent", "name": "Independent" },
  //     "author": "Jacob Stolworthy",
  //     "title": "Kanye West reacts after Kim Kardashian explains reason for divorcing him in new interview - The Independent",
  //     "description": "Rapper’s response came an hour after interview was published",
  //     "url": "https://www.independent.co.uk/arts-entertainment/music/news/kanye-west-kim-kardashian-divorce-vogue-b2011905.html",
  //     "urlToImage": "https://static.independent.co.uk/2022/02/09/18/Kanye-West-Kim-Kardashian-Interview.jpg?quality=75&width=1200&auto=webp",
  //     "publishedAt": "2022-02-10T06:00:18Z",
  //     "content": "Kanye West has issued a Kim Kardashian plea after his ex explained her reasoning for divorcing him in a new interview.\r\nIn February 2021, Kardashian filed for divorce from the rapper, who has legally… [+1821 chars]"
  //   },
  //   {
  //     "source": { "id": "bleacher-report", "name": "Bleacher Report" },
  //     "author": "Rob Goldberg",
  //     "title": "Jeremy Giambi Dies At Age 47; Played 6 MLB Seasons for A's, Red Sox, More - Bleacher Report",
  //     "description": "Former MLB player Jeremy Giambi died Wednesday at the age of 47, his agent Joel Wolfe announced, per <a...",
  //     "url": "https://bleacherreport.com/articles/10026457-jeremy-giambi-dies-at-age-47-played-6-mlb-seasons-for-as-red-sox-more",
  //     "urlToImage": "https://media.bleacherreport.com/image/upload/x_0,y_407,w_1955,h_1300,c_crop/v1644450705/hkgeny04j8wu3wbif5jr.jpg",
  //     "publishedAt": "2022-02-10T05:55:20Z",
  //     "content": "John Cordes/Icon Sportswire via Getty Images\r\nFormer MLB player Jeremy Giambi died Wednesday at the age of 47, his agent Joel Wolfe announced, per Susan Slusser of the San Francisco Chronicle.\r\nThe O… [+1241 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "hoopsrumors.com" },
  //     "author": null,
  //     "title": "Trade Rumors: Harden, Westbrook, Nuggets, Raptors - hoopsrumors.com",
  //     "description": "On NBA Countdown Wednesday evening (hat tip RealGM), ESPN's Adrian Wojnarowski continued to relay that the Nets and Sixers aren't &hellip;",
  //     "url": "https://www.hoopsrumors.com/2022/02/trade-rumors-harden-westbrook-nuggets-raptors.html",
  //     "urlToImage": "https://cdn.hoopsrumors.com/files/2021/09/James-Harden-900x600.jpg",
  //     "publishedAt": "2022-02-10T05:44:00Z",
  //     "content": "On NBA Countdown Wednesday evening (hat tip RealGM), ESPN’s Adrian Wojnarowski continued to relay that the Nets and Sixers aren’t involved in meaningful discussions involving James Harden.\r\n“Let’s st… [+2319 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "ScienceAlert" },
  //     "author": "Carly Cassella",
  //     "title": "A Common Over-The-Counter Drug Could Treat Long COVID, Case Study Reports - ScienceAlert",
  //     "description": "Two patients with long COVID in California have almost completely alleviated their symptoms by taking daily antihistamines, according to a newly published case report.",
  //     "url": "https://www.sciencealert.com/there-s-evidence-antihistamines-may-help-treat-long-covid-symptoms",
  //     "urlToImage": "https://www.sciencealert.com/images/2022-02/processed/AnthistamineTreatments_1024.jpg",
  //     "publishedAt": "2022-02-10T05:23:42Z",
  //     "content": "Two patients with long COVID in California have almost completely alleviated their symptoms by taking daily antihistamines, according to a newly published case report.\r\nWhile the evidence is anecdota… [+4732 chars]"
  //   },
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Rebecca Wright, Christine Brennan, Helen Regan and Nathan Hodge, CNN",
  //     "title": "ROC figure skater who had positive drug test at Beijing Winter Olympics is a minor, sources say - CNN",
  //     "description": "The Russian athlete from the gold medal winning figure skating team who tested positive for a prohibited substance is a minor, multiple sources told CNN.",
  //     "url": "https://www.cnn.com/2022/02/09/sport/roc-doping-skating-beijing-winter-olympics-spt-hnk-intl/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220209164416-roc-flag-general-super-tease.jpg",
  //     "publishedAt": "2022-02-10T04:54:00Z",
  //     "content": "Beijing (CNN)The Russian athlete from the gold medal winning figure skating team who tested positive for a prohibited substance is a minor, multiple sources told CNN.\r\nThe sources spoke on the condit… [+4264 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "YouTube" },
  //     "author": null,
  //     "title": "Every Reveal From Nintendo Direct February 2022 in 6 Minutes - IGN",
  //     "description": "Here are all the reveals from the February 2022 Nintendo Direct. From Mario Kart 8: Deluxe Booster Course Pass to Portal 1 & 2, check below for the full list...",
  //     "url": "https://www.youtube.com/watch?v=QsPsbZFNlfM",
  //     "urlToImage": "https://i.ytimg.com/vi/QsPsbZFNlfM/maxresdefault.jpg",
  //     "publishedAt": "2022-02-10T04:11:19Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": null, "name": "YouTube" },
  //     "author": null,
  //     "title": "Mask mandates updated in NY - PIX11 News",
  //     "description": "The state plans to send millions of at-home rapid COVID test kits to families with the intent that parents test their children at the end of winter break. Da...",
  //     "url": "https://www.youtube.com/watch?v=FYi6dJX0Fks",
  //     "urlToImage": "https://i.ytimg.com/vi/FYi6dJX0Fks/maxresdefault.jpg",
  //     "publishedAt": "2022-02-10T03:21:15Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": "independent", "name": "Independent" },
  //     "author": "Oliver O'Connell",
  //     "title": "Canada truckers - live: White House says bridge blockade supply chain risk as protesters dig in over mandates - The Independent",
  //     "description": "Canada trucker convoy news live",
  //     "url": "https://www.independent.co.uk/news/world/americas/canada-truckers-convoy-latest-trudeau-biden-b2011853.html",
  //     "urlToImage": "https://static.independent.co.uk/2022/02/08/18/urnpublicidap.orgdfbd69113f644f738a6ae79d277fafa7.jpg?quality=75&width=1200&auto=webp",
  //     "publishedAt": "2022-02-10T03:12:17Z",
  //     "content": "Aerial footage shows heavily congested Ambassador Bridge as truck convoy jams US-Canada border\r\nOttawa remains in a state of emergency as protesters in trucks opposed to Covid-19 restrictions continu… [+7088 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Deadline" },
  //     "author": "Bruce Haring",
  //     "title": "Dave Chappelle Gets Chapped Over Ohio Affordable Housing Plan - Deadline",
  //     "description": "An angry Dave Chappelle told his hometown council meeting Monday that he would not build two planned businesses in the area if they approved an ordinance that included dozens of affordable houing units. The meeting, held Monday in Yellow Springs, Ohio, saw th…",
  //     "url": "https://deadline.com/2022/02/dave-chappelle-opposes-ohio-affordable-housing-plan-1234930470/",
  //     "urlToImage": "https://deadline.com/wp-content/uploads/2021/01/2017_MathieuBitton_MG_7067-Edit_HR-copy.jpg?w=1024",
  //     "publishedAt": "2022-02-10T03:10:00Z",
  //     "content": "Yellow Springs is located near Dayton, Ohio, just north of Cincinnati. Chappelle previously said he envisioned the restaurant and club as intimate settings that will attract top and local talent\r\nCha… [+1015 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "SciTechDaily" },
  //     "author": null,
  //     "title": "Parker Solar Probe Captures Stunning New Images of Venus – Faint Glow Detected From the Planet's Surface - SciTechDaily",
  //     "description": "NASA’s Parker Solar Probe has taken its first visible light images of the surface of Venus from space. Smothered in thick clouds, Venus’ surface is usually shrouded from sight. But in two recent flybys of the planet, Parker used its Wide-Field Imager, or WISP…",
  //     "url": "https://scitechdaily.com/parker-solar-probe-captures-stunning-new-images-of-venus-faint-glow-detected-from-the-planets-surface/",
  //     "urlToImage": "https://scitechdaily.com/images/Parker-Solar-Probe-New-Veiws-of-Venus.jpg",
  //     "publishedAt": "2022-02-10T02:57:22Z",
  //     "content": "NASA’s Parker Solar Probe has taken its first visible light images of the surface of Venus from space.\r\nSmothered in thick clouds, Venus’ surface is usually shrouded from sight. But in two recent fly… [+9430 chars]"
  //   },
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Sean Lyngaas, CNN Business",
  //     "title": "Feds arrest a New York couple and seize $3.6 billion in stolen cryptocurrency - CNN",
  //     "description": "A New York couple has been arrested and charged with conspiring to launder $4.5 billion in stolen cryptocurrency funds. Law enforcement officials have seized $3.6 billion of those funds in what US Deputy Attorney General Lisa Monaco called \"the department's l…",
  //     "url": "https://www.cnn.com/2022/02/08/investing/cryptocurrency-laundering/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211019083118-04-bitcoin-file-super-tease.jpg",
  //     "publishedAt": "2022-02-10T02:42:00Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": "the-wall-street-journal",
  //       "name": "The Wall Street Journal"
  //     },
  //     "author": "Robbie Whelan",
  //     "title": "Disney’s Earnings Show Rebound in Disney+, Parks Businesses - The Wall Street Journal",
  //     "description": "Shares jump in after-hours trading on the better-than-expected results; company says it’s ‘more confident than ever’ in its streaming platform",
  //     "url": "https://www.wsj.com/articles/disney-seen-reporting-tepid-growth-at-streamer-disney-11644407213",
  //     "urlToImage": "https://images.wsj.net/im-481136/social",
  //     "publishedAt": "2022-02-10T01:54:00Z",
  //     "content": "Walt Disney Co. regained momentum in subscription growth for its flagship Disney+ streaming service and reported record income from its theme parks and resorts, signaling that the worst of the damage… [+372 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "New York Times" },
  //     "author": "Reid J. Epstein, Michael S. Schmidt",
  //     "title": "Archives Found Possible Classified Material in Boxes Returned by Trump - The New York Times",
  //     "description": "The National Archives consulted with the Justice Department about the discovery after the former president sent back documents that he had improperly taken from the White House when he left office.",
  //     "url": "https://www.nytimes.com/2022/02/09/us/politics/national-archives-trump-classified-material.html",
  //     "urlToImage": "https://static01.nyt.com/images/2022/02/09/us/politics/09dc-archives-image/merlin_182384259_b34ee56f-1b6b-4718-971b-c952139cc386-facebookJumbo.jpg",
  //     "publishedAt": "2022-02-10T00:59:44Z",
  //     "content": "After the F.B.I., during the 2016 presidential campaign, investigated Hillary Clintons handling of classified material while she was secretary of state, Mr. Trump assailed her, helping make the issue… [+2085 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "CNET" },
  //     "author": "Lisa Eadicicco",
  //     "title": "Samsung Galaxy S22 Ultra early impressions: Say hello to the S Pen - CNET",
  //     "description": "Samsung's new Ultra phone has a built-in stylus, just like the bygone Note.",
  //     "url": "https://www.cnet.com/tech/mobile/samsung-galaxy-s22-ultra-early-impressions-hello-s-pen/",
  //     "urlToImage": "https://www.cnet.com/a/img/BvFMOC-q2Fak-h3m-bLGaZ8xiiY=/1200x630/2022/02/07/cf33e24d-e7b6-4e36-bb8d-7e4ede98beb7/samsung-s22-ultra-preview-006.jpg",
  //     "publishedAt": "2022-02-10T00:33:22Z",
  //     "content": "Samsung's most expensive nonfoldable phone is taking a lesson from the company's past. The Galaxy S22 Ultra, announced on Wednesday alongside the Galaxy S22, S22 Plus and the Galaxy Tab S8 effectivel… [+10749 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "The Guardian" },
  //     "author": "Guardian staff reporter",
  //     "title": "Nasa fears SpaceX plan for 30000 satellites could hamper space missions - The Guardian",
  //     "description": "The US agency says Elon Musk’s expansion could flood Earth’s orbit with objects, making flights and observations more difficult",
  //     "url": "https://amp.theguardian.com/science/2022/feb/10/nasa-fears-spacex-plan-for-30000-satellites-could-hamper-space-missions",
  //     "urlToImage": null,
  //     "publishedAt": "2022-02-10T00:16:00Z",
  //     "content": "SpaceXThe US agency says Elon Musks expansion could flood Earths orbit with objects, making flights and observations more difficult \r\nThu 10 Feb 2022 00.16 GMT\r\nNasa has raised concerns about SpaceXs… [+2767 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "ScienceAlert" },
  //     "author": "Ben Turner, Live Science",
  //     "title": "Powerful Geomagnetic Storm Sends Dozens of SpaceX Satellites to a Fiery Doom - ScienceAlert",
  //     "description": "A powerful geomagnetic storm has doomed 40 Starlink satellites launched by SpaceX last week, the company has announced.",
  //     "url": "https://www.sciencealert.com/dozens-of-starlink-satellites-sent-hurtling-towards-the-ground-by-powerful-solar-storm",
  //     "urlToImage": "https://www.sciencealert.com/images/2022-02/processed/SunSolarWind_1024.jpg",
  //     "publishedAt": "2022-02-10T00:11:29Z",
  //     "content": "A powerful geomagnetic storm has doomed 40 Starlink satellites launched by SpaceX last week, the company has announced.\r\nElon Musk's company launched a Falcon 9 rocket bearing the 49 satellites from … [+3935 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "CNBC" },
  //     "author": "Eustance Huang",
  //     "title": "Asia-Pacific stocks mixed as investors await U.S. inflation data - CNBC",
  //     "description": "The U.S. consumer price index report is set to be released Thursday stateside.",
  //     "url": "https://www.cnbc.com/2022/02/10/asia-markets-us-inflation-data-reserve-bank-of-india-rate-decision-currencies-oil.html",
  //     "urlToImage": "https://image.cnbcfm.com/api/v1/image/106816845-1609213716683-gettyimages-1229866474-JAPAN_JPX.jpeg?v=1644450385",
  //     "publishedAt": "2022-02-09T23:39:25Z",
  //     "content": "SINGAPORE Shares in Asia-Pacific were mixed in Thursday trade as investors await the release of U.S. consumer inflation data.\r\nMainland Chinese stocks were lower by the afternoon, with the Shanghai c… [+1968 chars]"
  //   }
  // ]

  // constructor(){
  //   super();
  //   console.log("Hello, I am a constructor from news component");
  //   this.state={
  //     articles:this.articles,
  //     loading:false
  //   }
  // }
  
  static defaultProps={
    country: 'in',
    pageSize:8,
    category:'general'
  }

  static propTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

  async componentDidMount(){
    console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9afcf55c057d4285960c288de32050cc&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data=await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading:false});
  }

  constructor(){
    super();
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }

  handlePrevClick = async ()=>{
      console.log("Previous");
        let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9afcf55c057d4285960c288de32050cc&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        this.setState({
          page:this.state.page-1,
          articles:parsedData.articles,
          loading:false
        })
      }

  handleNextClick=async ()=>{
      console.log("Next");
      if(!(this.state.page+1> Math.ceil(this.state.totalResults/this.props.pageSize))){

        let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=9afcf55c057d4285960c288de32050cc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        this.setState({
          page:this.state.page+1,
          articles:parsedData.articles,
          loading:false
        })
      }
  }



  render() {
    return (
      <div className="container my-3">
        <h2 style={{paddingBottom:"15px", textAlign:"center"}}>NewsHunt - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">

          {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
          </div>

          })}

          
        </div>
        <div className="container d-flex justify-content-between" style={{paddingTop:"30px"}}>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page>=Math.ceil(this.state.totalResults/this.props.pageSize)-1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>
        </div>
      </div>
    )
  }
}



