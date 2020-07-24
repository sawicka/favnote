export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const getId = () => Math.floor(Math.random() * 100);

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      itemContent: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

// {
//       id: 1,
//       title: 'Hello Roman',
//       content:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//       created: '1 day',
//       twitterName: 'hello_roman',
//     },
