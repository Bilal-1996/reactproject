import {takeEvery} from 'redux-saga/effects'
import { loginHandler, managerHomeHandler,softReqByManagerHandler,wfmHomeHandler,softReqByWFMHandler } from './handlers'


export function* rootSaga(){
    yield takeEvery("LOGIN_ACTION",loginHandler)
    yield takeEvery("READ_MANAGER_HOME",managerHomeHandler)
    yield takeEvery("READ_WFM_HOME",wfmHomeHandler)
    yield takeEvery("SOFTREQUEST_MANAGER",softReqByManagerHandler)
    yield takeEvery("SOFTREQUEST_WFM",softReqByWFMHandler)
}