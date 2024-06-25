import {
 addAllCnt, addPromise, deletePromise, selectAllPromise,
} from '@/db/promiseDB';
import { PromiseListType, PromiseType } from '@/type/promise';
import { MAX_PROMISE_COUNT } from '@/utility/constants';

class PromiseList implements PromiseListType {
   promiseList:PromiseType[] = [];

   async initPromiseListFromDB() {
      this.promiseList = await selectAllPromise();

      return this;
   }

   async addPromise(promise:PromiseType) {
      const isAddable = await this.checkIsPromiseLessThen();

      if (isAddable) {
         await addPromise(promise);

         this.promiseList.push(promise); // intead init from DB, manually update. if no error occured, this would work.
      }

   return this;
   }

   async deletePromise(id:string) {
      await this.initPromiseListFromDB();
      const isPromiseInList = this.promiseList.findIndex((promise:PromiseType) => promise.id === id) > -1;
      if (isPromiseInList) {
         await deletePromise(parseInt(id, 10));

         this.promiseList = this.promiseList.filter((promise:PromiseType) => promise.id !== id);
      } else {
         console.log("no promise in list. can't delete");
      }

      return this;
   }

   async addAllPromiseCnt() {
      await addAllCnt();
      this.promiseList = this.promiseList.map((promise) => ({ ...promise,
         transcribeCnt: promise.transcribeCnt + 1 }));

      return this;
   }

   async getPromiseList() {
      await this.initPromiseListFromDB();

      return this.promiseList;
   }

   async checkIsPromiseLessThen(maxCnt = MAX_PROMISE_COUNT) {
      return (await this.getPromiseList()).length < maxCnt;
   }
}

export default PromiseList;
