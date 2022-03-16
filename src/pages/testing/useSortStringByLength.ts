import { SkillsType } from './skillsList';

interface SortingInterface {
  list: SkillsType[];
  limit: number;
  characterLimit: 31;
}

interface Results {
  limitChips: SkillsType[];
  excessChips: SkillsType[];
}

const useSortStringByLength = () => {
  console.log('sorting');

  const sortStringByLength = ({
    list,
    limit,
    characterLimit,
  }: SortingInterface): Results => {
    const listMiddle = Math.floor(list.length / 2);

    const listLeft = list.slice(0, listMiddle);
    const listRight = list.slice(listMiddle);

    const leftArr = [];
    const rightArr = [];

    let index = 0;

    const resultList: Results = {
      limitChips: [],
      excessChips: [],
    };

    while (index < list.length) {
      if (list[index].name.length % characterLimit === 0) {
        leftArr.push(list[index]);
      }
      if (list[index].name.length % characterLimit !== 0) {
        rightArr.push(list[index]);
      }
    }

    while (list.length > index) {
      resultList.limitChips = leftArr;
      resultList.excessChips = rightArr;
    }

    index += 1;

    return sortStringByLength({ list, characterLimit, limit });
  };

  return {
    sortStringByLength,
  };
};

export default useSortStringByLength;
