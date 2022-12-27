import dataGlasses from "../../data/dataGlasses.json";

const DEFAULT_STATE = {
  glassesList: [...dataGlasses],
  glassesInfo: dataGlasses[1],
};

export const tryglassesReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_ITEM": {
      const Info = JSON.parse(JSON.stringify(state.glassesInfo));
      const dataList = [...state.glassesList];
      dataList.forEach((element) => {
        if (payload == element.id) {
          Info.id = element.id;
          Info.price = element.price;
          Info.name = element.name;
          Info.url = element.url;
          Info.urlImg = element.urlImg;
          Info.desc = element.desc;
        }
      });
      state.glassesInfo = Info;
      console.log(state.glassesInfo);
      break;
    }

    case "DELETE_ITEM": {
      break;
    }

    default:
      break;
  }

  return { ...state };
};
