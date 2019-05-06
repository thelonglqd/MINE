import React from 'react';
import Goal from './Goal';

class GoalsList extends React.Component {
  dummyData = [
    {
      id: 1,
      name: "Build upwork profile",
      priority: 1,
      imageUrl: 'https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/78/38/49/78384903-0b3b-10a3-332f-6aadf3d52456/AppIcon-1x_U007emarketing-0-85-220-0-4.png/600x600wa.png',
      steps: [
        { name: "Do English skills test", isDone: true },
        { name: "Do JS skills test", isDone: true },
        { name: "Do HTML and CSS skills test", isDone: true },
        { name: "Do NodeJS skills test", isDone: false },
        { name: "Do React skills test", isDone: false }
      ]
    },
    {
      id: 2,
      name: "Learn GraphQL",
      priority: 2,
      imageUrl: 'https://cdn-images-1.medium.com/max/1200/1*49DDRZhUWvVnH-QNHuSUSw.png',
      steps: [
        {
          name: "Buy Stephen grider's GraphQL course on Udemy ",
          isDone: false
        },
        { name: "Learn GrapQL basic section", isDone: false },
        { name: "Build a demo app with graphQL", isDone: false },
        { name: "Deployment for graphql API", isDone: false }
      ]
    },
    {
      id: 3,
      name: "Read 10 books",
      priority: 3,
      imageUrl: 'http://culture.affinitymagazine.us/wp-content/uploads/2017/05/635873821517718970351055939_Stack-of-books-great-education.jpg',
      steps: [
        { name: "Black swan", isDone: false },
        { name: "Lord of the rings", isDone: false },
        { name: "The Godfather", isDone: false },
        { name: "Flat world", isDone: false }
      ]
    },
    {
      id: 4,
      name: "Play Sekiro DLC",
      priority: 4,
      imageUrl: 'https://cache.escapistmagazine.com/2019/04/04145105/sekiro-shadows-die-twice-ps4-review-2-1280x720-1080x608.jpg',
      steps: [
        { name: "Buy DLC on steam", isDone: false },
        {
          name: "Complete game without kuro's charm and ringed the demon bell",
          isDone: false
        }
      ]
    },
    {
      id: 5,
      name: "Learn another programming language",
      priority: 3,
      imageUrl: 'https://pluralsight.imgix.net/paths/python-7be70baaac.png',
      steps: [
        { name: "Buy DLC on steam", isDone: false },
        {
          name: "Complete game without kuro's charm and ringed the demon bell",
          isDone: false
        }
      ]
    }
  ];

  renderSteps(g) {
    return (
      <div className={`g${g.index}Steps`}>
        g.steps.map(s => (
          <li>s</li>
        ))
      </div>
    )
  }

  render() {
    return this.dummyData.map(g => (
      <div>
        <button
          dataToggle="toggle"
          dataTarget={`.g${g.index}Steps`}
          onClick={() => this.renderSteps(g)}
          className="goal-title" 
          style={{ border: "1px solid red", marginTop: "5px" }}>
          {g.name}
        </button>
      </div>
    ));
  }
}

export default GoalsList;