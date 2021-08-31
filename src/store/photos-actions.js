import { uiActions } from "./ui-slice";
import { PhotosActions } from "./photos-slice";

import axios from "../apis/index";

export const fetchPhotos = (category, qty = 5) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.toggleIsLoading());
      const response = await axios.get(
        "/search/photos/" + category + "?qty=" + qty
      );
      console.dir(response.data.photos);
      dispatch(uiActions.toggleIsLoading());

      dispatch(
        PhotosActions.replacePhotos({ photos: response.data.photos, category })
      );
    } catch (e) {
      dispatch(uiActions.toggleIsLoading());
      dispatch(uiActions.toggleShowError());
      dispatch(
        uiActions.showNotification({
          status: e.response.status,
          message: e.response.data.error.message,
        })
      );
    }
  };
};
