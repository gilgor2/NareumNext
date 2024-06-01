import {
 addAllCnt, addPromise, deletePromise, selectAllPromise,
} from '@/db/promiseDB';
import { DBPromise, Promise } from '@/type/promise';
import { MAX_PROMISE_COUNT } from '@/utility/constants';

class PromiseList {
 promiseList:Promise[] = [];

 async updatePromiseListFromDB() {
   const { data } = await selectAllPromise();

  if (data) {
    this.promiseList = (data as DBPromise[]).map(PromiseList.DBPromiseToPromise);
  }
   return this;
 }

 async addPromise(promise:string) {
   await this.updatePromiseListFromDB();

   if (this.promiseList.length < MAX_PROMISE_COUNT) {
      const newPromise:Promise = {
         text: promise,
         transcribeCnt: 0,
         date: new Date(),
         id: 'tmp',
      };
      const dbPromise = PromiseList.promiseToDBPromise(newPromise);
      await addPromise(dbPromise);
   }

   return this;
 }

 async deletePromise(id:string) {
    const numId = parseInt(id, 10);
    const error = await deletePromise(numId);
    if (error) {
        return this;
    }

    return this;
 }

 async addAllPromiseCnt() {
   const error = await addAllCnt();
    return this;
 }

 async getPromiseList() {
   await this.updatePromiseListFromDB();
   return this.promiseList;
 }

 static promiseToDBPromise(promise:Promise) {
    const dbPromise:DBPromise = {
        text: promise.text,
        transcribe_cnt: promise.transcribeCnt,
    };
    return dbPromise;
 }

 static DBPromiseToPromise(dbPromise:DBPromise) {
    const promise:Promise = {
        text: dbPromise.text,
        id: `${dbPromise.id}`,
        date: dbPromise.created_at,
        transcribeCnt: dbPromise.transcribe_cnt,
    };
    return promise;
 }
}

export default PromiseList;
