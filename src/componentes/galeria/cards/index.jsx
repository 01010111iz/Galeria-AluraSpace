import React from 'react'
import Card from 'card/index';

export default function Cards({itens, styles }) {
  return (
    <ul className={styles.galeria__lista}>
    {itens.map((item) => {
      return (
        <Card key={item.id} item={item} styles={styles} />
      );
    })}
  </ul>
  )
}
