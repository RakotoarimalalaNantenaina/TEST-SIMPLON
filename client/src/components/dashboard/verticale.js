import React, { Component } from 'react';


class Menu extends Component {

    render() {
        return (
            <div>

<div class="row">
        <div class="col-2 collapse d-md-flex bg-light pt-2 min-vh-100" id="sidebar">
            <ul class="nav flex-column flex-nowrap">
                <li class="nav-item"><a class="nav-link" href="#">Overview</a></li>
                <li class="nav-item">
                    <a class="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports</a>
                    <div class="collapse" id="submenu1" aria-expanded="false">
                        <ul class="flex-column pl-2 nav">
                            <li class="nav-item"><a class="nav-link py-0" href="#">Orders</a></li>
                            <li class="nav-item">
                                <a class="nav-link collapsed py-1" href="#submenu1sub1" data-toggle="collapse" data-target="#submenu1sub1">Customers</a>
                                <div class="collapse" id="submenu1sub1" aria-expanded="false">
                                    <ul class="flex-column nav pl-4">
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-clock-o"></i> Daily
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-dashboard"></i> Dashboard
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-bar-chart"></i> Charts
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link p-1" href="#">
                                                <i class="fa fa-fw fa-compass"></i> Areas
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item"><a class="nav-link" href="#">Analytics</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Export</a></li>
            </ul>
        </div>
        <div class="col pt-2">
            <h2>
                <a href="" data-target="#sidebar" data-toggle="collapse" class="d-md-none"><i class="fa fa-bars"></i></a>
                Content
            </h2>
            <h6 class="hidden-sm-down">Shrink page width to see sidebar collapse</h6>
            <p>3 wolf moon retro jean shorts chambray sustainable roof party. Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park Godard kogi, next level irony ennui twee squid fap selvage. Meggings flannel Brooklyn literally small batch, mumblecore
                PBR try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights, viral fap cronut leggings squid chillwave pickled gentrify mustache. 3 wolf moon hashtag church-key Odd Future. Austin messenger bag normcore, Helvetica Williamsburg
                sartorial tote bag distillery Portland before they sold out gastropub taxidermy Vice.</p>
        </div>
    </div>
            </div>
        );
    }
}
export default Menu; 
