import { AppComponent } from "../app.component";
import { SingleMovieComponent } from "../components/single-movie/single-movie.component";
import { HomeComponent } from "../components/home/home.component";

export class SortHelper {
    static sortArray(array : any[], property, order: string){
        array.sort((leftSide, rightSide): number => {
            if(leftSide[property] > rightSide[property]) return (order == 'asc')? 1 : -1;
            if(leftSide[property] < rightSide[property]) return (order =='asc')?-1 : 1;
            return 0;
         });
         return array;
    }

    // static getRoutes() : any[] {
    //     return [
    //         {
    //             path: "",
    //             component: HomeComponent
    //         },
    //         {
    //             path: "home",
    //             component: SingleMovieComponent
    //         }
    //     ]
    // }
}