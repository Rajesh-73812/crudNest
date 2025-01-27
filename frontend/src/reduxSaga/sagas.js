import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from './productSlice';

// Worker Saga: Fetch products from API
function* fetchProductsSaga() {
  try {
    const response = yield call(axios.get, 'https://fakestoreapi.com/products');
    console.log(response.data); // Debugging line
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    console.error(error); // Debugging line
    yield put(fetchProductsFailure(error.message));
  }
}

// Watcher Saga: Watch for fetchProductsRequest actions
function* watchFetchProducts() {
  yield takeEvery(fetchProductsRequest.type, fetchProductsSaga);
}

// Root Saga: Combine all sagas
export default function* rootSaga() {
  yield watchFetchProducts();
}