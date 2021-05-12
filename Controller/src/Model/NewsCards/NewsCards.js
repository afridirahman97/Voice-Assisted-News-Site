import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';
import './style.css';



const infoCards = [ 
  {  title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, Health, Science, Sports', text: 'Give me the latest Technology news' },
  { color: '#4527a0', title: 'News by Terms', info: 'PlayStation 5, Smartphones...', text: 'What\'s up with PlayStation 5' },
  { color: '#283593', title: 'News by Sources', info: 'CNN,BBC News, Time, IGN, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if(!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
              <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                <Typography variant="h4">{infoCard.title}</Typography>
                {infoCard.info ? 
                  <Typography variant="h6">
                    <strong>
                      {infoCard.title.split(' ')[2]}:
                    </strong>
                    <br/>
                    {infoCard.info}
                  </Typography>
                  : null}
                  <Typography variant="h6">
                    Try saying: <br/> <i>{infoCard.text}</i>
                  </Typography>
              </div>
            </Grid>
          )) }
        </Grid>
      </Grow>
    )
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>

      {articles.map((article, i) => (
        <Grid key={i} item xs={12} sm={6} md={2} lg={3} style={{display: 'flex'}} >
          <NewsCard article={article} activeArticle={activeArticle} i={i} />
        </Grid>
      ))}

      </Grid>
    </Grow>
  )
}

export default NewsCards