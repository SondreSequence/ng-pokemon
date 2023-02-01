import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../guards/auth.guard";
import { LoginPage } from "./login/login.page";
import { PokemonCataloguePage } from "./pokemon-catalogue/pokemon-catalogue.page";
import { TrainerProfilePage } from "./trainer-profile/trainer-profile.page";



const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"
    },
    {
        path:"login",
        component: LoginPage
    },
    {
        path:"catalogue",
        component: PokemonCataloguePage,
        canActivate: [ AuthGuard ]
    },
    {
        path:"profile",
        component: TrainerProfilePage,
        canActivate: [ AuthGuard ]
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], //import a module
    exports: [
        RouterModule
    ] //Expose module and its features

})
export class appRoutingModule{

}