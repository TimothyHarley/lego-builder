import $ from 'jquery';
import partsData from '../../data/partsData';

const legoHeads = () => {
  const createFace = (heads) => {
    let newString = '';
    heads.forEach((head) => {
      newString += `
        <div class="${head.name}" id="${head.id}">
            <img src=${head.imageUrl}>
        </div>`;
    });
    $('#face-container').html(newString);
  };

  partsData.getFaces()
    .then((data) => {
      createFace(data.data);
    })
    .catch((error) => {
      console.error({ error });
    });
};

export default { legoHeads };
