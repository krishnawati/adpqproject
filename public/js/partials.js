(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/charts-chartjs/charts-chartjs.component.html',
    '<section class="content-header">\n' +
    '  <h1>ChartJS<small>Preview sample</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li class="active">User Lists</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Area Chart</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '              <p class="text-center">\n' +
    '                <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n' +
    '              </p>\n' +
    '              <div class="chart">\n' +
    '                <canvas id="area" class="chart chart-line" chart-data="vm.areaChartData" chart-labels="vm.areaChartLabels" chart-legend="false" chart-series="vm.areaChartSeries" chart-click="vm.onClick" chart-colours="vm.areaChartColours" style="height: 180px;">\n' +
    '                </canvas>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-info">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Line Chart</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '              <p class="text-center">\n' +
    '                <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n' +
    '              </p>\n' +
    '              <div class="chart">\n' +
    '                <canvas id="line" class="chart chart-line" chart-data="vm.lineChartData" chart-labels="vm.lineChartLabels" chart-legend="false" chart-series="vm.lineChartSeries" chart-click="vm.onClick" style="height: 180px;">\n' +
    '                </canvas>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-danger">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Donut Chart</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-8">\n' +
    '              <div class="chart-responsive">\n' +
    '                <canvas id="doughnut" height="200" class="chart chart-doughnut" chart-data="vm.pieData" chart-labels="vm.pieLabels">\n' +
    '                </canvas>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="col-md-4">\n' +
    '              <ul class="chart-legend clearfix">\n' +
    '                <li><i class="fa fa-circle-o text-red"></i> Chrome</li>\n' +
    '                <li><i class="fa fa-circle-o text-green"></i> IE</li>\n' +
    '                <li><i class="fa fa-circle-o text-yellow"></i> FireFox</li>\n' +
    '                <li><i class="fa fa-circle-o text-aqua"></i> Safari</li>\n' +
    '                <li><i class="fa fa-circle-o text-light-blue"></i> Opera</li>\n' +
    '                <li><i class="fa fa-circle-o text-gray"></i> Navigator</li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-footer no-padding">\n' +
    '          <ul class="nav nav-pills nav-stacked">\n' +
    '            <li><a>United States of America <span class="pull-right text-red"><i class="fa fa-angle-down"></i> 12%</span></a></li>\n' +
    '            <li><a>India <span class="pull-right text-green"><i class="fa fa-angle-up"></i> 4%</span></a></li>\n' +
    '            <li><a>China<span class="pull-right text-yellow"><i class="fa fa-angle-left"></i> 0%</span></a></li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-success">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Bar Chart</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-md-12">\n' +
    '              <p class="text-center">\n' +
    '                <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>\n' +
    '              </p>\n' +
    '              <div class="chart">\n' +
    '                <canvas id="area" class="chart chart-bar" chart-data="vm.barChartData" chart-labels="vm.barChartLabels" chart-legend="false" chart-series="vm.barChartSeries" chart-click="vm.onClick" chart-colours="vm.barChartColours" style="height: 250px;">\n' +
    '                </canvas>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/coming-soon/coming-soon.component.html',
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-12">\n' +
    '      <div class="box box-info">\n' +
    '        <div class="box-header with-border">\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <h3>Coming Soon... (Pull Requests are Welcome)</h3>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/dashboard/dashboard.component.html',
    '<section class="content" data-ng-init="init()">\n' +
    '\n' +
    '<h1>California Emergency Services</h1>\n' +
    '\n' +
    '    \n' +
    '       <div ng-app="ng-map">\n' +
    '        <ng-map default-style="true" center="current-location" zoom="14">\n' +
    '          <info-window position="current-location">\n' +
    '            <span>Loation found using HTML5.</span>\n' +
    '          </info-window>\n' +
    '           <shape name="circle" ng-repeat="city in vm.cities" no-watcher="true"\n' +
    '            stroke-color="#FF0000"\n' +
    '            stroke-opacity="0.8"\n' +
    '            stroke-weight="2"\n' +
    '            fill-color="#FF0000"\n' +
    '            fill-opacity="0.35"\n' +
    '            center="{{city.position}}"\n' +
    '            radius="{{vm.getRadius(25)}}">\n' +
    '          </shape>\n' +
    '        </ng-map>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '        \n' +
    '<div class="container">               \n' +
    '   <label for="repeatSelect"> <h3> Select a range to get Notifications in your area: </h2></label>\n' +
    '    <select name="repeatSelect" id="repeatSelect" ng-model="data.model">\n' +
    '      <option ng-repeat="option in data.availableOptions" value="{{option.name}}">{{option.name}}</option>\n' +
    '    </select>\n' +
    '</div>\n' +
    '<h3> \n' +
    '<button ng-click="submit()" class="btn btn-primary">\n' +
    '  Submit\n' +
    '</button>\n' +
    '\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/forgot-password/forgot-password.component.html',
    '<form ng-submit="vm.submit()" class="ForgotPassword-form" name="vm.forgotPasswordForm" novalidate>\n' +
    '  <div class="callout callout-danger" ng-if="vm.errorTrigger">\n' +
    '    <h4>Error:</h4>\n' +
    '    <p>Please check your email and try again.</p>\n' +
    '  </div>\n' +
    '  <div class="form-group has-feedback" ng-class="{ \'has-error\': (vm.forgotPasswordForm.email.$invalid || vm.serverError) && ( vm.formSubmitted || vm.forgotPasswordForm.email.$touched) }">\n' +
    '    <input type="email" class="form-control" placeholder="Please enter your email address" name="email" ng-model="vm.email" ng-required="true" ng-pattern="/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/">\n' +
    '    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n' +
    '    <p ng-show="vm.forgotPasswordForm.email.$error.email  && ( vm.formSubmitted || vm.forgotPasswordForm.email.$touched)" class="help-block">This is not a valid email</p>\n' +
    '    <p ng-show="vm.forgotPasswordForm.email.$error.required && ( vm.formSubmitted || vm.forgotPasswordForm.email.$touched)" class="help-block">Email is required.</p>\n' +
    '    <p ng-show=\'vm.serverError\' class="help-block">{{ vm.serverError }}</p>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '      <button type="submit" class="btn btn-primary btn-block btn-flat">\n' +
    '        Submit\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/forms-general/forms-general.component.html',
    '<section class="content-header">\n' +
    '  <h1>\n' +
    '    General Form Elements\n' +
    '    <small>Preview</small>\n' +
    '  </h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a href="#">Forms</a></li>\n' +
    '    <li class="active">General Elements</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Quick Example</h3>\n' +
    '        </div>\n' +
    '        <form role="form">\n' +
    '          <div class="box-body">\n' +
    '            <div class="form-group">\n' +
    '              <label for="exampleInputEmail1">Email address</label>\n' +
    '              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="exampleInputPassword1">Password</label>\n' +
    '              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="exampleInputFile">File input</label>\n' +
    '              <input type="file" id="exampleInputFile">\n' +
    '              <p class="help-block">Example block-level help text here.</p>\n' +
    '            </div>\n' +
    '            <div class="checkbox">\n' +
    '              <label>\n' +
    '                <input type="checkbox"> Check me out\n' +
    '              </label>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <button type="submit" class="btn btn-primary">Submit</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '      <div class="box box-success">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Different Height</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <input class="form-control input-lg" type="text" placeholder=".input-lg">\n' +
    '          <br>\n' +
    '          <input class="form-control" type="text" placeholder="Default input">\n' +
    '          <br>\n' +
    '          <input class="form-control input-sm" type="text" placeholder=".input-sm">\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="box box-danger">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Different Width</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="row">\n' +
    '            <div class="col-xs-3">\n' +
    '              <input type="text" class="form-control" placeholder=".col-xs-3">\n' +
    '            </div>\n' +
    '            <div class="col-xs-4">\n' +
    '              <input type="text" class="form-control" placeholder=".col-xs-4">\n' +
    '            </div>\n' +
    '            <div class="col-xs-5">\n' +
    '              <input type="text" class="form-control" placeholder=".col-xs-5">\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="box box-info">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Input Addon</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="input-group">\n' +
    '            <span class="input-group-addon">@</span>\n' +
    '            <input type="text" class="form-control" placeholder="Username">\n' +
    '          </div>\n' +
    '          <br>\n' +
    '          <div class="input-group">\n' +
    '            <input type="text" class="form-control">\n' +
    '            <span class="input-group-addon">.00</span>\n' +
    '          </div>\n' +
    '          <br>\n' +
    '          <div class="input-group">\n' +
    '            <span class="input-group-addon">$</span>\n' +
    '            <input type="text" class="form-control">\n' +
    '            <span class="input-group-addon">.00</span>\n' +
    '          </div>\n' +
    '          <h4>With icons</h4>\n' +
    '          <div class="input-group">\n' +
    '            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>\n' +
    '            <input type="email" class="form-control" placeholder="Email">\n' +
    '          </div>\n' +
    '          <br>\n' +
    '          <div class="input-group">\n' +
    '            <input type="text" class="form-control">\n' +
    '            <span class="input-group-addon"><i class="fa fa-check"></i></span>\n' +
    '          </div>\n' +
    '          <br>\n' +
    '          <div class="input-group">\n' +
    '            <span class="input-group-addon"><i class="fa fa-dollar"></i></span>\n' +
    '            <input type="text" class="form-control">\n' +
    '            <span class="input-group-addon"><i class="fa fa-ambulance"></i></span>\n' +
    '          </div>\n' +
    '          <h4>With checkbox and radio inputs</h4>\n' +
    '          <div class="row">\n' +
    '            <div class="col-lg-6">\n' +
    '              <div class="input-group">\n' +
    '                <span class="input-group-addon">\n' +
    '                          <input type="checkbox">\n' +
    '                        </span>\n' +
    '                <input type="text" class="form-control">\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="col-lg-6">\n' +
    '              <div class="input-group">\n' +
    '                <span class="input-group-addon">\n' +
    '                          <input type="radio">\n' +
    '                        </span>\n' +
    '                <input type="text" class="form-control">\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <h4>With buttons</h4>\n' +
    '          <p class="margin">Large: <code>.input-group.input-group-lg</code></p>\n' +
    '          <div class="input-group input-group-lg">\n' +
    '            <div class="input-group-btn">\n' +
    '              <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">Action\n' +
    '                <span class="fa fa-caret-down"></span></button>\n' +
    '              <ul class="dropdown-menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <input type="text" class="form-control">\n' +
    '          </div>\n' +
    '          <p class="margin">Normal</p>\n' +
    '          <div class="input-group">\n' +
    '            <div class="input-group-btn">\n' +
    '              <button type="button" class="btn btn-danger">Action</button>\n' +
    '            </div>\n' +
    '            <input type="text" class="form-control">\n' +
    '          </div>\n' +
    '          <p class="margin">Small <code>.input-group.input-group-sm</code></p>\n' +
    '          <div class="input-group input-group-sm">\n' +
    '            <input type="text" class="form-control">\n' +
    '            <span class="input-group-btn"><button type="button" class="btn btn-info btn-flat">Go!</button></span>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-info">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Horizontal Form</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal">\n' +
    '          <div class="box-body">\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="email" class="form-control" id="inputEmail3" placeholder="Email">\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Password</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="password" class="form-control" id="inputPassword3" placeholder="Password">\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <div class="col-sm-offset-2 col-sm-10">\n' +
    '                <div class="checkbox">\n' +
    '                  <label>\n' +
    '                    <input type="checkbox"> Remember me\n' +
    '                  </label>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <button type="submit" class="btn btn-default">Cancel</button>\n' +
    '            <button type="submit" class="btn btn-info pull-right">Sign in</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '      <div class="box box-warning">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">General Elements</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <form role="form">\n' +
    '            <div class="form-group">\n' +
    '              <label>Text</label>\n' +
    '              <input type="text" class="form-control" placeholder="Enter ...">\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label>Text Disabled</label>\n' +
    '              <input type="text" class="form-control" placeholder="Enter ..." disabled>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label>Textarea</label>\n' +
    '              <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label>Textarea Disabled</label>\n' +
    '              <textarea class="form-control" rows="3" placeholder="Enter ..." disabled></textarea>\n' +
    '            </div>\n' +
    '            <div class="form-group has-success">\n' +
    '              <label class="control-label" for="inputSuccess"><i class="fa fa-check"></i> Input with success</label>\n' +
    '              <input type="text" class="form-control" id="inputSuccess" placeholder="Enter ...">\n' +
    '              <span class="help-block">Help block with success</span>\n' +
    '            </div>\n' +
    '            <div class="form-group has-warning">\n' +
    '              <label class="control-label" for="inputWarning"><i class="fa fa-bell-o"></i> Input with warning\n' +
    '              </label>\n' +
    '              <input type="text" class="form-control" id="inputWarning" placeholder="Enter ...">\n' +
    '              <span class="help-block">Help block with warning</span>\n' +
    '            </div>\n' +
    '            <div class="form-group has-error">\n' +
    '              <label class="control-label" for="inputError"><i class="fa fa-times-circle-o"></i> Input with error\n' +
    '              </label>\n' +
    '              <input type="text" class="form-control" id="inputError" placeholder="Enter ...">\n' +
    '              <span class="help-block">Help block with error</span>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <div class="checkbox">\n' +
    '                <label>\n' +
    '                  <input type="checkbox"> Checkbox 1\n' +
    '                </label>\n' +
    '              </div>\n' +
    '              <div class="checkbox">\n' +
    '                <label>\n' +
    '                  <input type="checkbox"> Checkbox 2\n' +
    '                </label>\n' +
    '              </div>\n' +
    '              <div class="checkbox">\n' +
    '                <label>\n' +
    '                  <input type="checkbox" disabled> Checkbox disabled\n' +
    '                </label>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <div class="radio">\n' +
    '                <label>\n' +
    '                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked> Option one is this and that&mdash;be sure to include why it\'s great\n' +
    '                </label>\n' +
    '              </div>\n' +
    '              <div class="radio">\n' +
    '                <label>\n' +
    '                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"> Option two can be something else and selecting it will deselect option one\n' +
    '                </label>\n' +
    '              </div>\n' +
    '              <div class="radio">\n' +
    '                <label>\n' +
    '                  <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled> Option three is disabled\n' +
    '                </label>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label>Select</label>\n' +
    '              <select class="form-control">\n' +
    '                <option>option 1</option>\n' +
    '                <option>option 2</option>\n' +
    '                <option>option 3</option>\n' +
    '                <option>option 4</option>\n' +
    '                <option>option 5</option>\n' +
    '              </select>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label>Select Disabled</label>\n' +
    '              <select class="form-control" disabled>\n' +
    '                <option>option 1</option>\n' +
    '                <option>option 2</option>\n' +
    '                <option>option 3</option>\n' +
    '                <option>option 4</option>\n' +
    '                <option>option 5</option>\n' +
    '              </select>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label>Select Multiple</label>\n' +
    '              <select multiple class="form-control">\n' +
    '                <option>option 1</option>\n' +
    '                <option>option 2</option>\n' +
    '                <option>option 3</option>\n' +
    '                <option>option 4</option>\n' +
    '                <option>option 5</option>\n' +
    '              </select>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label>Select Multiple Disabled</label>\n' +
    '              <select multiple class="form-control" disabled>\n' +
    '                <option>option 1</option>\n' +
    '                <option>option 2</option>\n' +
    '                <option>option 3</option>\n' +
    '                <option>option 4</option>\n' +
    '                <option>option 5</option>\n' +
    '              </select>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-form/login-form.component.html',
    '<form ng-submit="vm.login()" method="post" name="vm.loginForm">\n' +
    '  <div class="callout callout-danger" ng-if="vm.loginfailederror">\n' +
    '    <h4>Login Failed</h4>\n' +
    '    <p>{{ vm.loginfailederror }}</p>\n' +
    '  </div>\n' +
    '  <div class="callout callout-danger" ng-if="vm.loginfailed">\n' +
    '    <h4>Login Failed</h4>\n' +
    '    <p>Incorrect Email/Username or Password.</p>\n' +
    '  </div>\n' +
    '  <div class="callout callout-danger" ng-if="vm.unverified">\n' +
    '    <h4>Email Unverified</h4>\n' +
    '    <p>Please check your email and click the verification link.</p>\n' +
    '  </div>\n' +
    '  <div class="callout callout-success" ng-if="vm.registerSuccess">\n' +
    '    <h4>Registration Success!</h4>\n' +
    '    <p>A verification link has been sent to your Email Account. Thank You!</p>\n' +
    '  </div>\n' +
    '  <div class="callout callout-success" ng-if="vm.successMsg">\n' +
    '    <h4>Success!</h4>\n' +
    '    <p>{{ vm.successMsg }}</p>\n' +
    '  </div>\n' +
    '  <div class="form-group has-feedback">\n' +
    '    <input type="email" class="form-control" placeholder="Email" name="email" ng-model="vm.email" ng-required="true" ng-pattern="/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/">\n' +
    '    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n' +
    '  </div>\n' +
    '  <div class="form-group has-feedback">\n' +
    '    <input type="password" class="form-control" placeholder="Password" name="password" ng-model="vm.password" ng-required="true">\n' +
    '    <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '      <button type="submit" class="btn btn-primary btn-block btn-flat">\n' +
    '        Sign In\n' +
    '      </button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</form>\n' +
    '<div class="social-auth-links text-center">\n' +
    '  <p>- OR -</p>\n' +
    '  <a href="/auth/github" class="btn btn-block btn-social btn-github btn-flat">\n' +
    '    <i class="fa fa-github"></i> Sign in using Github\n' +
    '  </a>\n' +
    '  <a href="/auth/google" class="btn btn-block btn-social btn-google btn-flat">\n' +
    '    <i class="fa fa-google"></i> Sign in using Google+\n' +
    '  </a>\n' +
    '  <a href="/auth/facebook" class="btn btn-block btn-social btn-facebook btn-flat">\n' +
    '    <i class="fa fa-facebook"></i> Sign in using Facebook\n' +
    '  </a>\n' +
    '</div>\n' +
    '<div class="row">\n' +
    '  <div class="col-xs-6">\n' +
    '    <div class="pull-left">\n' +
    '      <a ui-sref="forgot_password">Forgot your password?</a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="col-xs-6">\n' +
    '    <div class="pull-right">\n' +
    '      <a ui-sref="register" class="text-center">Create an account</a>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/login-loader/login-loader.component.html',
    'Logging in...');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/nav-header/nav-header.component.html',
    '<header class="main-header">\n' +
    '  <a href="/" class="logo">\n' +
    '    <span class="logo-mini"><b>A</b>LT</span>\n' +
    '   \n' +
    '  </a>\n' +
    '  <nav class="navbar navbar-static-top">\n' +
    '    <a href="javascript:void(0)" class="sidebar-toggle" data-toggle="offcanvas" role="button">\n' +
    '      <span class="sr-only">Toggle navigation</span>\n' +
    '    </a>\n' +
    '    <div class="navbar-custom-menu">\n' +
    '\n' +
    '      <ul class="nav navbar-nav">\n' +
    '        \n' +
    '        <li class="dropdown messages-menu" uib-dropdown>\n' +
    '\n' +
    '          <a href="#" class="dropdown-toggle" data-toggle="dropdown" uib-dropdown-toggle>\n' +
    '            <i class="fa fa-envelope-o"></i>\n' +
    '            <span class="label label-success">4</span>\n' +
    '          </a>\n' +
    '          <ul class="dropdown-menu" uib-dropdown-menu>\n' +
    '            <li class="header">You have 4 messages</li>\n' +
    '            <li>\n' +
    '              <ul class="menu">\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      Support Team\n' +
    '                      <small><i class="fa fa-clock-o"></i> 5 mins</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user3-128x128.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      AdminLTE Design Team\n' +
    '                      <small><i class="fa fa-clock-o"></i> 2 hours</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user4-128x128.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      Developers\n' +
    '                      <small><i class="fa fa-clock-o"></i> Today</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user3-128x128.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      Sales Department\n' +
    '                      <small><i class="fa fa-clock-o"></i> Yesterday</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <div class="pull-left">\n' +
    '                      <img src="/img/user4-128x128.jpg" class="img-circle" alt="User Image">\n' +
    '                    </div>\n' +
    '                    <h4>\n' +
    '                      Reviewers\n' +
    '                      <small><i class="fa fa-clock-o"></i> 2 days</small>\n' +
    '                    </h4>\n' +
    '                    <p>Why not buy a new awesome theme?</p>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '            </li>\n' +
    '            <li class="footer"><a href="#">See All Messages</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <li class="dropdown notifications-menu" uib-dropdown>\n' +
    '          <a href="#" class="dropdown-toggle" data-toggle="dropdown" uib-dropdown-toggle>\n' +
    '            <i class="fa fa-bell-o"></i>\n' +
    '            <span class="label label-warning">10</span>\n' +
    '          </a>\n' +
    '          <ul class="dropdown-menu" uib-dropdown-menu>\n' +
    '            <li class="header">You have 10 notifications</li>\n' +
    '            <li>\n' +
    '              <ul class="menu">\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-users text-aqua"></i> 5 new members joined today\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the page and may cause design problems\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-users text-red"></i> 5 new members joined\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-shopping-cart text-green"></i> 25 sales made\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <i class="fa fa-user text-red"></i> You changed your username\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '            </li>\n' +
    '            <li class="footer"><a href="#">View all</a></li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <li class="dropdown tasks-menu" uib-dropdown>\n' +
    '          <a href="#" class="dropdown-toggle" uib-dropdown-toggle>\n' +
    '            <i class="fa fa-flag-o"></i>\n' +
    '            <span class="label label-danger">9</span>\n' +
    '          </a>\n' +
    '          <ul class="dropdown-menu" uib-dropdown-menu>\n' +
    '            <li class="header">You have 9 tasks</li>\n' +
    '            <li>\n' +
    '              <ul class="menu">\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <h3>\n' +
    '                      Design some buttons\n' +
    '                      <small class="pull-right">20%</small>\n' +
    '                    </h3>\n' +
    '                    <div class="progress xs">\n' +
    '                      <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
    '                        <span class="sr-only">20% Complete</span>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <h3>\n' +
    '                      Create a nice theme\n' +
    '                      <small class="pull-right">40%</small>\n' +
    '                    </h3>\n' +
    '                    <div class="progress xs">\n' +
    '                      <div class="progress-bar progress-bar-green" style="width: 40%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
    '                        <span class="sr-only">40% Complete</span>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <h3>\n' +
    '                      Some task I need to do\n' +
    '                      <small class="pull-right">60%</small>\n' +
    '                    </h3>\n' +
    '                    <div class="progress xs">\n' +
    '                      <div class="progress-bar progress-bar-red" style="width: 60%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
    '                        <span class="sr-only">60% Complete</span>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '                <li>\n' +
    '                  <a href="#">\n' +
    '                    <h3>\n' +
    '                      Make beautiful transitions\n' +
    '                      <small class="pull-right">80%</small>\n' +
    '                    </h3>\n' +
    '                    <div class="progress xs">\n' +
    '                      <div class="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">\n' +
    '                        <span class="sr-only">80% Complete</span>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </a>\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '            </li>\n' +
    '            <li class="footer">\n' +
    '              <a href="#">View all tasks</a>\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '        <li class="dropdown user user-menu" uib-dropdown>\n' +
    '          <a href="" class="dropdown-toggle" data-toggle="dropdown" uib-dropdown-toggle>\n' +
    '            <img src="{{vm.userData.avatar}}" class="user-image" alt="User Image" onError="this.src=\'//placeholdit.imgix.net/~text?txtfont=monospace,bold&bg=DD4B39&txtclr=ffffff&txt=A&w=45&h=45&txtsize=16\'">\n' +
    '            <span class="hidden-xs">{{vm.userData.name | capitalize}}</span>\n' +
    '          </a>\n' +
    '          <ul class="dropdown-menu" uib-dropdown-menu>\n' +
    '            <li class="user-header">\n' +
    '              <img src="{{vm.userData.avatar}}" class="img-circle" alt="User Image" onError="this.src=\'//placeholdit.imgix.net/~text?txtfont=monospace,bold&bg=DD4B39&txtclr=ffffff&txt=A&w=90&h=90&txtsize=36\'">\n' +
    '              <p>\n' +
    '                {{vm.userData.name | capitalize}}\n' +
    '                <small>Member since {{vm.userData.created_at | datemillis |date:\'MMMM yyyy\' }}</small>\n' +
    '              </p>\n' +
    '            </li>\n' +
    '            <li class="user-body">\n' +
    '              <div class="row">\n' +
    '                <div class="col-xs-4 text-center">\n' +
    '                  <a href="#">Followers</a>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 text-center">\n' +
    '                  <a href="#">Sales</a>\n' +
    '                </div>\n' +
    '                <div class="col-xs-4 text-center">\n' +
    '                  <a href="#">Friends</a>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </li>\n' +
    '            <li class="user-footer">\n' +
    '              <div class="pull-left">\n' +
    '                <a ui-sref="app.profile" class="btn btn-default btn-flat">Profile</a>\n' +
    '              </div>\n' +
    '              <div class="pull-right">\n' +
    '                <a ui-sref="app.logout" class="btn btn-default btn-flat">Sign out</a>\n' +
    '              </div>\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </nav>\n' +
    '</header>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/nav-sidebar/nav-sidebar.component.html',
    '<aside class="main-sidebar">\n' +
    '  <section class="sidebar">\n' +
    '    <div class="user-panel">\n' +
    '      <div class="pull-left image">\n' +
    '        <img src="{{vm.userData.avatar}}" class="img-circle" alt="User Image" onError="this.src=\'//placeholdit.imgix.net/~text?txtfont=monospace,bold&bg=DD4B39&txtclr=ffffff&txt=A&w=45&h=45&txtsize=16\'">\n' +
    '      </div>\n' +
    '      <div class="pull-left info">\n' +
    '        <p>{{vm.userData.name | capitalize}}</p>\n' +
    '        <a href="javascript:void(0)"><i class="fa fa-circle text-success"></i> Online</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <form action="#" method="get" class="sidebar-form">\n' +
    '      <div class="input-group">\n' +
    '        <input type="text" name="q" class="form-control" placeholder="Search...">\n' +
    '        <span class="input-group-btn">\n' +
    '          <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>\n' +
    '          </button>\n' +
    '        </span>\n' +
    '      </div>\n' +
    '    </form>\n' +
    '    <ul class="sidebar-menu">\n' +
    '      <li class="header">MAIN NAVIGATION</li>\n' +
    '      <li>\n' +
    '        <a ui-sref=\'app.landing\'>\n' +
    '          <i class="fa fa-dashboard"></i> <span>Dashboard</span>\n' +
    '        </a>\n' +
    '      </li>\n' +
    '      <li class="treeview" ng-show="vm.can(\'manage.users\')">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-users"></i> <span>Users</span> <i class="fa fa-angle-left pull-right"></i>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li ng-show="vm.can(\'manage.users\')" class="active"><a ui-sref=\'app.userlist\'><i class="fa fa-circle-o"></i> <span>User List</span></a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li class="treeview" ng-show="vm.can(\'manage.roles\') || vm.can(\'manage.permissions\')">\n' +
    '        <a href="javascript:void(0)">\n' +
    '          <i class="fa fa-cog"></i> <span>Settings</span> <i class="fa fa-angle-left pull-right"></i>\n' +
    '        </a>\n' +
    '        <ul class="treeview-menu">\n' +
    '          <li ng-show="vm.can(\'manage.roles\')"><a ui-sref=\'app.userroles\'><i class="fa fa-circle-o"></i> <span>User Roles</span></a></li>\n' +
    '          <li ng-show="vm.can(\'manage.permissions\')"><a ui-sref=\'app.userpermissions\'><i class="fa fa-circle-o"></i> <span>User Permissions</span></a></li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '     \n' +
    '      <li>\n' +
    '        <a ui-sref="app.widgets">\n' +
    '          <i class="fa fa-th"></i> <span>Widgets</span>\n' +
    '          <small class="label pull-right bg-green">new</small>\n' +
    '        </a>\n' +
    '      </li>\n' +
    '     \n' +
    '    \n' +
    '    </ul>\n' +
    '  </section>\n' +
    '</aside>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/register-form/register-form.component.html',
    '<form name="vm.registerForm" ng-submit="vm.register(vm.registerForm.$valid)" novalidate>\n' +
    '  <div class="form-group has-feedback" ng-class="{ \'has-error\': vm.registerForm.name.$invalid && ( vm.formSubmitted || vm.registerForm.name.$touched) }">\n' +
    '    <input type="text" class="form-control" placeholder="Full name" ng-model="vm.name" name="name" ng-maxlength="30" required>\n' +
    '    <span class="glyphicon glyphicon-user form-control-feedback"></span>\n' +
    '    <p ng-show="vm.registerForm.name.$error.required && ( vm.formSubmitted || vm.registerForm.name.$touched)" class="help-block">Full Name is required.</p>\n' +
    '    <p ng-show="vm.registerForm.name.$error.maxlength" class="help-block">Full Name is too long.</p>\n' +
    '    <p ng-show="vm.registerForm.name.$invalid && (vm.formSubmitted || vm.errors.name)" class="help-block">{{vm.errors.name}}</p>\n' +
    '  </div>\n' +
    '  <div class="form-group has-feedback" ng-class="{ \'has-error\': vm.registerForm.email.$invalid && ( vm.formSubmitted || vm.registerForm.email.$touched) }">\n' +
    '    <input type="email" class="form-control" placeholder="Email" ng-model="vm.email" name="email" ng-maxlength="30" ng-pattern="/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/" required>\n' +
    '    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>\n' +
    '    <p ng-show="vm.registerForm.email.$invalid && (vm.formSubmitted || vm.errors.email)" class="help-block">{{vm.errors.email}}</p>\n' +
    '    <p ng-show="vm.registerForm.email.$error.required && ( vm.formSubmitted || vm.registerForm.email.$touched)" class="help-block">Email is required.</p>\n' +
    '    <p ng-show="vm.registerForm.email.$error.email && vm.registerForm.email.$touched" class="help-block">This is not a valid email.</p>\n' +
    '  </div>\n' +
    '  <div class="form-group has-feedback" ng-class="{ \'has-error\': vm.registerForm.password.$invalid && ( vm.formSubmitted || vm.registerForm.password.$touched) }">\n' +
    '    <input type="password" class="form-control" placeholder="Password" ng-model="vm.password" name="password" ng-minlength="8" ng-maxlength="50" required>\n' +
    '    <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '    <p ng-show="vm.registerForm.password.$error.required && ( vm.formSubmitted || vm.registerForm.password.$touched)" class="help-block">Password is required.</p>\n' +
    '    <p ng-show="vm.registerForm.password.$error.maxlength" class="help-block">Password is too long.</p>\n' +
    '    <p ng-show="vm.registerForm.password.$invalid && vm.registerForm.password.$error.minlength && vm.registerForm.password.$touched" class="help-block">Password is too short, Please enter more than 8 characters.</p>\n' +
    '    <p ng-show="vm.registerForm.password.$invalid && (vm.formSubmitted || vm.errors.password)" class="help-block">{{vm.errors.password}}</p>\n' +
    '  </div>\n' +
    '  <div class="form-group has-feedback" ng-class="{ \'has-error\': vm.registerForm.password_confirmation.$invalid && ( vm.formSubmitted || vm.registerForm.password_confirmation.$touched) }">\n' +
    '    <input type="password" class="form-control" placeholder="Password confirmation" ng-model="vm.password_confirmation" password-verify="vm.password" name="password_confirmation" ng-minlength="8" ng-maxlength="50" required>\n' +
    '    <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '    <p ng-show="vm.registerForm.password_confirmation.$error.required && ( vm.formSubmitted || vm.registerForm.password_confirmation.$touched)" class="help-block">Password confirmation is required.</p>\n' +
    '    <p ng-show="vm.registerForm.password_confirmation.$error.passwordVerify && ( vm.formSubmitted || vm.registerForm.password_confirmation.$touched)" class="help-block">Password confirmation does not match.</p>\n' +
    '    <p ng-show="vm.registerForm.password_confirmation.$error.maxlength" class="help-block">Password confirmation is too long.</p>\n' +
    '    <p ng-show="vm.registerForm.password_confirmation.$invalid && vm.registerForm.password_confirmation.$error.minlength && vm.registerForm.password_confirmation.$touched" class="help-block">Password confirmation is too short, Please enter more than 8 characters.</p>\n' +
    '    <p ng-show="vm.registerForm.password_confirmation.$invalid && (vm.formSubmitted || vm.errors.password_confirmation)" class="help-block">{{vm.errors.password_confirmation}}</p>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '      <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/reset-password/reset-password.component.html',
    '<form ng-submit="vm.submit(vm.resetPasswordForm.$valid)" name="vm.resetPasswordForm" novalidate>\n' +
    '  <div ng-if="!vm.isValidToken" layout="row" layout-align="center center">\n' +
    '    <md-progress-circular md-mode="indeterminate"></md-progress-circular>\n' +
    '  </div>\n' +
    '  <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '    <h4>{{alert.title}}</h4>\n' +
    '    <p>{{alert.msg}}</p>\n' +
    '  </div>\n' +
    '  <div ng-show="vm.isValidToken">\n' +
    '    <div class="form-group has-feedback" ng-class="{ \'has-error\': vm.resetPasswordForm.password.$invalid && ( vm.formSubmitted || vm.resetPasswordForm.password.$touched) }">\n' +
    '      <input type="password" class="form-control" placeholder="Please enter your new password" ng-model="vm.password" name="password" ng-minlength="8" ng-maxlength="50" required>\n' +
    '      <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '      <p ng-show="vm.resetPasswordForm.password.$error.required && ( vm.formSubmitted || vm.resetPasswordForm.password.$touched)" class="help-block">Password is required.</p>\n' +
    '      <p ng-show="vm.resetPasswordForm.password.$error.maxlength" class="help-block">Password is too long.</p>\n' +
    '      <p ng-show="vm.resetPasswordForm.password.$invalid && vm.resetPasswordForm.password.$error.minlength && vm.resetPasswordForm.password.$touched" class="help-block">Password is too short, Please enter more than 8 characters.</p>\n' +
    '      <p ng-show="vm.resetPasswordForm.password.$invalid && (vm.formSubmitted || vm.errors.password)" class="help-block">{{vm.errors.password}}</p>\n' +
    '    </div>\n' +
    '    <div class="form-group has-feedback" ng-class="{ \'has-error\': vm.resetPasswordForm.password_confirmation.$invalid && ( vm.formSubmitted || vm.resetPasswordForm.password_confirmation.$touched ) }">\n' +
    '      <input type="password" class="form-control" placeholder="Please confirm your new password" ng-model="vm.password_confirmation" password-verify="vm.password" name="password_confirmation" ng-minlength="8" ng-maxlength="50" required>\n' +
    '      <span class="glyphicon glyphicon-lock form-control-feedback"></span>\n' +
    '      <p ng-show="vm.resetPasswordForm.password_confirmation.$error.required && ( vm.formSubmitted || vm.resetPasswordForm.password_confirmation.$touched)" class="help-block">Password confirmation is required.</p>\n' +
    '      <p ng-show="vm.resetPasswordForm.password_confirmation.$error.passwordVerify && (vm.formSubmitted || vm.resetPasswordForm.password_confirmation.$touched)" class="help-block">Password confirmation does not match.</p>\n' +
    '      <p ng-show="vm.resetPasswordForm.password_confirmation.$error.maxlength" class="help-block">Password confirmation is too long.</p>\n' +
    '      <p ng-show="vm.resetPasswordForm.password_confirmation.$invalid && vm.resetPasswordForm.password_confirmation.$error.minlength && vm.resetPasswordForm.password_confirmation.$touched" class="help-block">Password confirmation is too short, Please enter more than 8 characters.</p>\n' +
    '      <p ng-show="vm.resetPasswordForm.password_confirmation.$invalid && (vm.formSubmitted || vm.errors.password_confirmation)" class="help-block">{{vm.errors.password_confirmation}}</p>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <button type="submit" class="btn btn-primary btn-block btn-flat">Submit</button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/tables-simple/tables-simple.component.html',
    '<section class="content-header">\n' +
    '  <h1>Simple Tables <small>preview of simple tables</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a href="#">Tables</a></li>\n' +
    '    <li class="active">Simple</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Bordered Table</h3>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body">\n' +
    '          <table class="table table-bordered">\n' +
    '            <tr>\n' +
    '              <th style="width: 10px">#</th>\n' +
    '              <th>Task</th>\n' +
    '              <th>Progress</th>\n' +
    '              <th style="width: 40px">Label</th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>1.</td>\n' +
    '              <td>Update software</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs">\n' +
    '                  <div class="progress-bar progress-bar-danger" style="width: 55%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-red">55%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>2.</td>\n' +
    '              <td>Clean database</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs">\n' +
    '                  <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-yellow">70%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>3.</td>\n' +
    '              <td>Cron job running</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs progress-striped active">\n' +
    '                  <div class="progress-bar progress-bar-primary" style="width: 30%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-light-blue">30%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>4.</td>\n' +
    '              <td>Fix and squish bugs</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs progress-striped active">\n' +
    '                  <div class="progress-bar progress-bar-success" style="width: 90%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-green">90%</span></td>\n' +
    '            </tr>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '        <div class="box-footer clearfix">\n' +
    '          <ul class="pagination pagination-sm no-margin pull-right">\n' +
    '            <li><a href="#">&laquo;</a></li>\n' +
    '            <li><a href="#">1</a></li>\n' +
    '            <li><a href="#">2</a></li>\n' +
    '            <li><a href="#">3</a></li>\n' +
    '            <li><a href="#">&raquo;</a></li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Condensed Full Width Table</h3>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body no-padding">\n' +
    '          <table class="table table-condensed">\n' +
    '            <tr>\n' +
    '              <th style="width: 10px">#</th>\n' +
    '              <th>Task</th>\n' +
    '              <th>Progress</th>\n' +
    '              <th style="width: 40px">Label</th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>1.</td>\n' +
    '              <td>Update software</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs">\n' +
    '                  <div class="progress-bar progress-bar-danger" style="width: 55%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-red">55%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>2.</td>\n' +
    '              <td>Clean database</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs">\n' +
    '                  <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-yellow">70%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>3.</td>\n' +
    '              <td>Cron job running</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs progress-striped active">\n' +
    '                  <div class="progress-bar progress-bar-primary" style="width: 30%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-light-blue">30%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>4.</td>\n' +
    '              <td>Fix and squish bugs</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs progress-striped active">\n' +
    '                  <div class="progress-bar progress-bar-success" style="width: 90%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-green">90%</span></td>\n' +
    '            </tr>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Simple Full Width Table</h3>\n' +
    '          <div class="box-tools">\n' +
    '            <ul class="pagination pagination-sm no-margin pull-right">\n' +
    '              <li><a href="#">&laquo;</a></li>\n' +
    '              <li><a href="#">1</a></li>\n' +
    '              <li><a href="#">2</a></li>\n' +
    '              <li><a href="#">3</a></li>\n' +
    '              <li><a href="#">&raquo;</a></li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body no-padding">\n' +
    '          <table class="table">\n' +
    '            <tr>\n' +
    '              <th style="width: 10px">#</th>\n' +
    '              <th>Task</th>\n' +
    '              <th>Progress</th>\n' +
    '              <th style="width: 40px">Label</th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>1.</td>\n' +
    '              <td>Update software</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs">\n' +
    '                  <div class="progress-bar progress-bar-danger" style="width: 55%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-red">55%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>2.</td>\n' +
    '              <td>Clean database</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs">\n' +
    '                  <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-yellow">70%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>3.</td>\n' +
    '              <td>Cron job running</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs progress-striped active">\n' +
    '                  <div class="progress-bar progress-bar-primary" style="width: 30%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-light-blue">30%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>4.</td>\n' +
    '              <td>Fix and squish bugs</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs progress-striped active">\n' +
    '                  <div class="progress-bar progress-bar-success" style="width: 90%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-green">90%</span></td>\n' +
    '            </tr>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Striped Full Width Table</h3>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body no-padding">\n' +
    '          <table class="table table-striped">\n' +
    '            <tr>\n' +
    '              <th style="width: 10px">#</th>\n' +
    '              <th>Task</th>\n' +
    '              <th>Progress</th>\n' +
    '              <th style="width: 40px">Label</th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>1.</td>\n' +
    '              <td>Update software</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs">\n' +
    '                  <div class="progress-bar progress-bar-danger" style="width: 55%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-red">55%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>2.</td>\n' +
    '              <td>Clean database</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs">\n' +
    '                  <div class="progress-bar progress-bar-yellow" style="width: 70%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-yellow">70%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>3.</td>\n' +
    '              <td>Cron job running</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs progress-striped active">\n' +
    '                  <div class="progress-bar progress-bar-primary" style="width: 30%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-light-blue">30%</span></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>4.</td>\n' +
    '              <td>Fix and squish bugs</td>\n' +
    '              <td>\n' +
    '                <div class="progress progress-xs progress-striped active">\n' +
    '                  <div class="progress-bar progress-bar-success" style="width: 90%"></div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td><span class="badge bg-green">90%</span></td>\n' +
    '            </tr>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '    <!-- /.col -->\n' +
    '  </div>\n' +
    '  <!-- /.row -->\n' +
    '  <div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Responsive Hover Table</h3>\n' +
    '          <div class="box-tools">\n' +
    '            <div class="input-group input-group-sm" style="width: 150px;">\n' +
    '              <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">\n' +
    '              <div class="input-group-btn">\n' +
    '                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <!-- /.box-header -->\n' +
    '        <div class="box-body table-responsive no-padding">\n' +
    '          <table class="table table-hover">\n' +
    '            <tr>\n' +
    '              <th>ID</th>\n' +
    '              <th>User</th>\n' +
    '              <th>Date</th>\n' +
    '              <th>Status</th>\n' +
    '              <th>Reason</th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>183</td>\n' +
    '              <td>John Doe</td>\n' +
    '              <td>11-7-2014</td>\n' +
    '              <td><span class="label label-success">Approved</span></td>\n' +
    '              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>219</td>\n' +
    '              <td>Alexander Pierce</td>\n' +
    '              <td>11-7-2014</td>\n' +
    '              <td><span class="label label-warning">Pending</span></td>\n' +
    '              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>657</td>\n' +
    '              <td>Bob Doe</td>\n' +
    '              <td>11-7-2014</td>\n' +
    '              <td><span class="label label-primary">Approved</span></td>\n' +
    '              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>175</td>\n' +
    '              <td>Mike Doe</td>\n' +
    '              <td>11-7-2014</td>\n' +
    '              <td><span class="label label-danger">Denied</span></td>\n' +
    '              <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>\n' +
    '            </tr>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '        <!-- /.box-body -->\n' +
    '      </div>\n' +
    '      <!-- /.box -->\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/ui-buttons/ui-buttons.component.html',
    '<section class="content-header">\n' +
    '  <h1>\n' +
    '    Buttons\n' +
    '    <small>Control panel</small>\n' +
    '  </h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a href="#">UI</a></li>\n' +
    '    <li class="active">Buttons</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-12">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header">\n' +
    '          <i class="fa fa-edit"></i>\n' +
    '          <h3 class="box-title">Buttons</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body pad table-responsive">\n' +
    '          <p>Various types of buttons. Using the base class <code>.btn</code></p>\n' +
    '          <table class="table table-bordered text-center">\n' +
    '            <tr>\n' +
    '              <th>Normal</th>\n' +
    '              <th>Large <code>.btn-lg</code></th>\n' +
    '              <th>Small <code>.btn-sm</code></th>\n' +
    '              <th>X-Small <code>.btn-xs</code></th>\n' +
    '              <th>Flat <code>.btn-flat</code></th>\n' +
    '              <th>Disabled <code>.disabled</code></th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td><button type="button" class="btn btn-block btn-default">Default</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-default btn-lg">Default</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-default btn-sm">Default</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-default btn-xs">Default</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-default btn-flat">Default</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-default disabled">Default</button></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td><button type="button" class="btn btn-block btn-primary">Primary</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-primary btn-lg">Primary</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-primary btn-sm">Primary</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-primary btn-xs">Primary</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-primary btn-flat">Primary</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-primary disabled">Primary</button></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td><button type="button" class="btn btn-block btn-success">Success</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-success btn-lg">Success</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-success btn-sm">Success</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-success btn-xs">Success</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-success btn-flat">Success</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-success disabled">Success</button></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td><button type="button" class="btn btn-block btn-info">Info</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-info btn-lg">Info</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-info btn-sm">Info</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-info btn-xs">Info</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-info btn-flat">Info</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-info disabled">Info</button></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td><button type="button" class="btn btn-block btn-danger">Danger</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-danger btn-lg">Danger</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-danger btn-sm">Danger</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-danger btn-xs">Danger</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-danger btn-flat">Danger</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-danger disabled">Danger</button></td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td><button type="button" class="btn btn-block btn-warning">Warning</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-warning btn-lg">Warning</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-warning btn-sm">Warning</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-warning btn-xs">Warning</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-warning btn-flat">Warning</button></td>\n' +
    '              <td><button type="button" class="btn btn-block btn-warning disabled">Warning</button></td>\n' +
    '            </tr>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Block Buttons</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <button type="button" class="btn btn-default btn-block">.btn-block</button>\n' +
    '          <button type="button" class="btn btn-default btn-block btn-flat">.btn-block .btn-flat</button>\n' +
    '          <button type="button" class="btn btn-default btn-block btn-sm">.btn-block .btn-sm</button>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Horizontal Button Group</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body table-responsive pad">\n' +
    '          <p>\n' +
    '            Horizontal button groups are easy to create with bootstrap. Just add your buttons inside <code>&lt;div class="btn-group"&gt;&lt;/div&gt;</code>\n' +
    '          </p>\n' +
    '          <table class="table table-bordered">\n' +
    '            <tr>\n' +
    '              <th>Button</th>\n' +
    '              <th>Icons</th>\n' +
    '              <th>Flat</th>\n' +
    '              <th>Dropdown</th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-default">Left</button>\n' +
    '                  <button type="button" class="btn btn-default">Middle</button>\n' +
    '                  <button type="button" class="btn btn-default">Right</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-default"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-default"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-default"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-default">1</button>\n' +
    '                  <button type="button" class="btn btn-default">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-info">Left</button>\n' +
    '                  <button type="button" class="btn btn-info">Middle</button>\n' +
    '                  <button type="button" class="btn btn-info">Right</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-info"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-info"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-info"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-info">1</button>\n' +
    '                  <button type="button" class="btn btn-info">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-danger">Left</button>\n' +
    '                  <button type="button" class="btn btn-danger">Middle</button>\n' +
    '                  <button type="button" class="btn btn-danger">Right</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-danger"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-danger"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-danger"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-danger">1</button>\n' +
    '                  <button type="button" class="btn btn-danger">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-warning">Left</button>\n' +
    '                  <button type="button" class="btn btn-warning">Middle</button>\n' +
    '                  <button type="button" class="btn btn-warning">Right</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-warning"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-warning"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-warning"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-warning">1</button>\n' +
    '                  <button type="button" class="btn btn-warning">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-success">Left</button>\n' +
    '                  <button type="button" class="btn btn-success">Middle</button>\n' +
    '                  <button type="button" class="btn btn-success">Right</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-success"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-success"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-success"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group">\n' +
    '                  <button type="button" class="btn btn-success">1</button>\n' +
    '                  <button type="button" class="btn btn-success">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Button Addon</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <p>With dropdown</p>\n' +
    '          <div class="input-group margin">\n' +
    '            <div class="input-group-btn">\n' +
    '              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Action\n' +
    '                <span class="fa fa-caret-down"></span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <input type="text" class="form-control">\n' +
    '          </div>\n' +
    '          <p>Normal</p>\n' +
    '          <div class="input-group margin">\n' +
    '            <div class="input-group-btn">\n' +
    '              <button type="button" class="btn btn-danger">Action</button>\n' +
    '            </div>\n' +
    '            <input type="text" class="form-control">\n' +
    '          </div>\n' +
    '          <p>Flat</p>\n' +
    '          <div class="input-group margin">\n' +
    '            <input type="text" class="form-control">\n' +
    '            <span class="input-group-btn">\n' +
    '              <button type="button" class="btn btn-info btn-flat">Go!</button>\n' +
    '            </span>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Split buttons</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <p>Normal split buttons:</p>\n' +
    '          <div class="margin">\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-default">Action</button>\n' +
    '              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-info">Action</button>\n' +
    '              <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-danger">Action</button>\n' +
    '              <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-success">Action</button>\n' +
    '              <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-warning">Action</button>\n' +
    '              <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <p>Flat split buttons:</p>\n' +
    '          <div class="margin">\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-default btn-flat">Action</button>\n' +
    '              <button type="button" class="btn btn-default btn-flat dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-info btn-flat">Action</button>\n' +
    '              <button type="button" class="btn btn-info btn-flat dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-danger btn-flat">Action</button>\n' +
    '              <button type="button" class="btn btn-danger btn-flat dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-success btn-flat">Action</button>\n' +
    '              <button type="button" class="btn btn-success btn-flat dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '            <div class="btn-group">\n' +
    '              <button type="button" class="btn btn-warning btn-flat">Action</button>\n' +
    '              <button type="button" class="btn btn-warning btn-flat dropdown-toggle" data-toggle="dropdown">\n' +
    '                <span class="caret"></span>\n' +
    '                <span class="sr-only">Toggle Dropdown</span>\n' +
    '              </button>\n' +
    '              <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a href="#">Action</a></li>\n' +
    '                <li><a href="#">Another action</a></li>\n' +
    '                <li><a href="#">Something else here</a></li>\n' +
    '                <li class="divider"></li>\n' +
    '                <li><a href="#">Separated link</a></li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Social Buttons (By <a href="https://github.com/lipis/bootstrap-social">Lipis</a>)\n' +
    '              </h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <a class="btn btn-block btn-social btn-bitbucket"><i class="fa fa-bitbucket"></i> Sign in with Bitbucket</a>\n' +
    '          <a class="btn btn-block btn-social btn-dropbox"><i class="fa fa-dropbox"></i> Sign in with Dropbox</a>\n' +
    '          <a class="btn btn-block btn-social btn-facebook"><i class="fa fa-facebook"></i> Sign in with Facebook</a>\n' +
    '          <a class="btn btn-block btn-social btn-flickr"><i class="fa fa-flickr"></i> Sign in with Flickr</a>\n' +
    '          <a class="btn btn-block btn-social btn-foursquare"><i class="fa fa-foursquare"></i> Sign in with Foursquare</a>\n' +
    '          <a class="btn btn-block btn-social btn-github"><i class="fa fa-github"></i> Sign in with GitHub</a>\n' +
    '          <a class="btn btn-block btn-social btn-google"><i class="fa fa-google-plus"></i> Sign in with Google</a>\n' +
    '          <a class="btn btn-block btn-social btn-instagram"><i class="fa fa-instagram"></i> Sign in with Instagram</a>\n' +
    '          <a class="btn btn-block btn-social btn-linkedin"><i class="fa fa-linkedin"></i> Sign in with LinkedIn</a>\n' +
    '          <a class="btn btn-block btn-social btn-tumblr"><i class="fa fa-tumblr"></i> Sign in with Tumblr</a>\n' +
    '          <a class="btn btn-block btn-social btn-twitter"><i class="fa fa-twitter"></i> Sign in with Twitter</a>\n' +
    '          <a class="btn btn-block btn-social btn-vk"><i class="fa fa-vk"></i> Sign in with VK</a>\n' +
    '          <br>\n' +
    '          <div class="text-center">\n' +
    '            <a class="btn btn-social-icon btn-bitbucket"><i class="fa fa-bitbucket"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-dropbox"><i class="fa fa-dropbox"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-flickr"><i class="fa fa-flickr"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-foursquare"><i class="fa fa-foursquare"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-github"><i class="fa fa-github"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-google"><i class="fa fa-google-plus"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-instagram"><i class="fa fa-instagram"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-linkedin"><i class="fa fa-linkedin"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-tumblr"><i class="fa fa-tumblr"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-twitter"><i class="fa fa-twitter"></i></a>\n' +
    '            <a class="btn btn-social-icon btn-vk"><i class="fa fa-vk"></i></a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Application Buttons</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <p>Add the classes <code>.btn.btn-app</code> to an <code>&lt;a></code> tag to achieve the following:</p>\n' +
    '          <a class="btn btn-app"><i class="fa fa-edit"></i> Edit</a>\n' +
    '          <a class="btn btn-app"><i class="fa fa-play"></i> Play</a>\n' +
    '          <a class="btn btn-app"><i class="fa fa-repeat"></i> Repeat</a>\n' +
    '          <a class="btn btn-app"><i class="fa fa-pause"></i> Pause</a>\n' +
    '          <a class="btn btn-app"><i class="fa fa-save"></i> Save</a>\n' +
    '          <a class="btn btn-app">\n' +
    '            <span class="badge bg-yellow">3</span>\n' +
    '            <i class="fa fa-bullhorn"></i> Notifications\n' +
    '          </a>\n' +
    '          <a class="btn btn-app">\n' +
    '            <span class="badge bg-green">300</span>\n' +
    '            <i class="fa fa-barcode"></i> Products\n' +
    '          </a>\n' +
    '          <a class="btn btn-app">\n' +
    '            <span class="badge bg-purple">891</span>\n' +
    '            <i class="fa fa-users"></i> Users\n' +
    '          </a>\n' +
    '          <a class="btn btn-app">\n' +
    '            <span class="badge bg-teal">67</span>\n' +
    '            <i class="fa fa-inbox"></i> Orders\n' +
    '          </a>\n' +
    '          <a class="btn btn-app">\n' +
    '            <span class="badge bg-aqua">12</span>\n' +
    '            <i class="fa fa-envelope"></i> Inbox\n' +
    '          </a>\n' +
    '          <a class="btn btn-app">\n' +
    '            <span class="badge bg-red">531</span>\n' +
    '            <i class="fa fa-heart-o"></i> Likes\n' +
    '          </a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Different colors</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <p>Mix and match with various background colors. Use base class <code>.btn</code> and add any available\n' +
    '            <code>.bg-*</code> class</p>\n' +
    '          here but that\'s only to make the content display correctly without having to use a table-->\n' +
    '          <p>\n' +
    '            <button type="button" class="btn bg-maroon btn-flat margin">.btn.bg-maroon.btn-flat</button>\n' +
    '            <button type="button" class="btn bg-purple btn-flat margin">.btn.bg-purple.btn-flat</button>\n' +
    '            <button type="button" class="btn bg-navy btn-flat margin">.btn.bg-navy.btn-flat</button>\n' +
    '            <button type="button" class="btn bg-orange btn-flat margin">.btn.bg-orange.btn-flat</button>\n' +
    '            <button type="button" class="btn bg-olive btn-flat margin">.btn.bg-olive.btn-flat</button>\n' +
    '          </p>\n' +
    '          <p>\n' +
    '            <button type="button" class="btn bg-maroon margin">.btn.bg-maroon</button>\n' +
    '            <button type="button" class="btn bg-purple margin">.btn.bg-purple</button>\n' +
    '            <button type="button" class="btn bg-navy margin">.btn.bg-navy</button>\n' +
    '            <button type="button" class="btn bg-orange margin">.btn.bg-orange</button>\n' +
    '            <button type="button" class="btn bg-olive margin">.btn.bg-olive</button>\n' +
    '          </p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="box">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Vertical Button Group</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body table-responsive pad">\n' +
    '          <p>\n' +
    '            Vertical button groups are easy to create with bootstrap. Just add your buttons inside <code>&lt;div class="btn-group-vertical"&gt;&lt;/div&gt;</code>\n' +
    '          </p>\n' +
    '          <table class="table table-bordered">\n' +
    '            <tr>\n' +
    '              <th>Button</th>\n' +
    '              <th>Icons</th>\n' +
    '              <th>Flat</th>\n' +
    '              <th>Dropdown</th>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-default">Top</button>\n' +
    '                  <button type="button" class="btn btn-default">Middle</button>\n' +
    '                  <button type="button" class="btn btn-default">Bottom</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-default"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-default"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-default"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-default btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-default">1</button>\n' +
    '                  <button type="button" class="btn btn-default">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-info">Top</button>\n' +
    '                  <button type="button" class="btn btn-info">Middle</button>\n' +
    '                  <button type="button" class="btn btn-info">Bottom</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-info"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-info"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-info"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-info btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-info">1</button>\n' +
    '                  <button type="button" class="btn btn-info">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-danger">Top</button>\n' +
    '                  <button type="button" class="btn btn-danger">Middle</button>\n' +
    '                  <button type="button" class="btn btn-danger">Bottom</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-danger"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-danger"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-danger"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-danger btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-danger">1</button>\n' +
    '                  <button type="button" class="btn btn-danger">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-warning">Top</button>\n' +
    '                  <button type="button" class="btn btn-warning">Middle</button>\n' +
    '                  <button type="button" class="btn btn-warning">Bottom</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-warning"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-warning"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-warning"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-warning btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-warning">1</button>\n' +
    '                  <button type="button" class="btn btn-warning">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '            <tr>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-success">Top</button>\n' +
    '                  <button type="button" class="btn btn-success">Middle</button>\n' +
    '                  <button type="button" class="btn btn-success">Bottom</button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-success"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-success"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-success"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-left"></i></button>\n' +
    '                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-center"></i></button>\n' +
    '                  <button type="button" class="btn btn-success btn-flat"><i class="fa fa-align-right"></i></button>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '              <td>\n' +
    '                <div class="btn-group-vertical">\n' +
    '                  <button type="button" class="btn btn-success">1</button>\n' +
    '                  <button type="button" class="btn btn-success">2</button>\n' +
    '                  <div class="btn-group">\n' +
    '                    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown">\n' +
    '                      <span class="caret"></span>\n' +
    '                    </button>\n' +
    '                    <ul class="dropdown-menu">\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                      <li><a href="#">Dropdown link</a></li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </td>\n' +
    '            </tr>\n' +
    '          </table>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/ui-general/ui-general.component.html',
    '<section class="content-header">\n' +
    '  <h1> General UI <small>Preview of UI elements</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a href="#">UI</a></li>\n' +
    '    <li class="active">General</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="box box-default color-palette-box">\n' +
    '    <div class="box-header with-border">\n' +
    '      <h3 class="box-title"><i class="fa fa-tag"></i> Color Palette</h3>\n' +
    '    </div>\n' +
    '    <div class="box-body">\n' +
    '      <div class="row">\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Primary</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-light-blue disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-light-blue color-palette"><span>#3c8dbc</span></div>\n' +
    '            <div class="bg-light-blue-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Info</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-aqua disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-aqua color-palette"><span>#00c0ef</span></div>\n' +
    '            <div class="bg-aqua-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Success</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-green disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-green color-palette"><span>#00a65a</span></div>\n' +
    '            <div class="bg-green-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Warning</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-yellow disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-yellow color-palette"><span>#f39c12</span></div>\n' +
    '            <div class="bg-yellow-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Danger</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-red disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-red color-palette"><span>#f56954</span></div>\n' +
    '            <div class="bg-red-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Gray</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-gray disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-gray color-palette"><span>#d2d6de</span></div>\n' +
    '            <div class="bg-gray-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="row">\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Navy</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-navy disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-navy color-palette"><span>#001F3F</span></div>\n' +
    '            <div class="bg-navy-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Teal</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-teal disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-teal color-palette"><span>#39CCCC</span></div>\n' +
    '            <div class="bg-teal-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Purple</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-purple disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-purple color-palette"><span>#605ca8</span></div>\n' +
    '            <div class="bg-purple-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Orange</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-orange disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-orange color-palette"><span>#ff851b</span></div>\n' +
    '            <div class="bg-orange-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Maroon</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-maroon disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-maroon color-palette"><span>#D81B60</span></div>\n' +
    '            <div class="bg-maroon-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-4 col-md-2">\n' +
    '          <h4 class="text-center">Black</h4>\n' +
    '          <div class="color-palette-set">\n' +
    '            <div class="bg-black disabled color-palette"><span>Disabled</span></div>\n' +
    '            <div class="bg-black color-palette"><span>#111111</span></div>\n' +
    '            <div class="bg-black-active color-palette"><span>Active</span></div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <h2 class="page-header">Alerts and Callouts</h2>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-default">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-warning"></i>\n' +
    '          <h3 class="box-title">Alerts</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="alert alert-danger alert-dismissible">\n' +
    '            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
    '            <h4><i class="icon fa fa-ban"></i> Alert!</h4> Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.\n' +
    '          </div>\n' +
    '          <div class="alert alert-info alert-dismissible">\n' +
    '            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
    '            <h4><i class="icon fa fa-info"></i> Alert!</h4> Info alert preview. This alert is dismissable.\n' +
    '          </div>\n' +
    '          <div class="alert alert-warning alert-dismissible">\n' +
    '            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
    '            <h4><i class="icon fa fa-warning"></i> Alert!</h4> Warning alert preview. This alert is dismissable.\n' +
    '          </div>\n' +
    '          <div class="alert alert-success alert-dismissible">\n' +
    '            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\n' +
    '            <h4><i class="icon fa fa-check"></i> Alert!</h4> Success alert preview. This alert is dismissable.\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-default">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-bullhorn"></i>\n' +
    '          <h3 class="box-title">Callouts</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="callout callout-danger">\n' +
    '            <h4>I am a danger callout!</h4>\n' +
    '            <p>There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>\n' +
    '          </div>\n' +
    '          <div class="callout callout-info">\n' +
    '            <h4>I am an info callout!</h4>\n' +
    '            <p>Follow the steps to continue to payment.</p>\n' +
    '          </div>\n' +
    '          <div class="callout callout-warning">\n' +
    '            <h4>I am a warning callout!</h4>\n' +
    '            <p>This is a yellow callout.</p>\n' +
    '          </div>\n' +
    '          <div class="callout callout-success">\n' +
    '            <h4>I am a success callout!</h4>\n' +
    '            <p>This is a green callout.</p>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <h2 class="page-header">AdminLTE Custom Tabs</h2>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="nav-tabs-custom">\n' +
    '        <ul class="nav nav-tabs">\n' +
    '          <li class="active"><a href="#tab_1" data-toggle="tab">Tab 1</a></li>\n' +
    '          <li><a href="#tab_2" data-toggle="tab">Tab 2</a></li>\n' +
    '          <li><a href="#tab_3" data-toggle="tab">Tab 3</a></li>\n' +
    '          <li class="dropdown">\n' +
    '            <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n' +
    '              Dropdown <span class="caret"></span>\n' +
    '            </a>\n' +
    '            <ul class="dropdown-menu">\n' +
    '              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>\n' +
    '              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>\n' +
    '              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>\n' +
    '              <li role="presentation" class="divider"></li>\n' +
    '              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>\n' +
    '            </ul>\n' +
    '          </li>\n' +
    '          <li class="pull-right"><a href="#" class="text-muted"><i class="fa fa-gear"></i></a></li>\n' +
    '        </ul>\n' +
    '        <div class="tab-content">\n' +
    '          <div class="tab-pane active" id="tab_1">\n' +
    '            <b>How to use:</b>\n' +
    '            <p>Exactly like the original bootstrap tabs except you should use the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>\n' +
    '            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.\n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab_2">\n' +
    '            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.\n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab_3">\n' +
    '            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="nav-tabs-custom">\n' +
    '        <ul class="nav nav-tabs pull-right">\n' +
    '          <li class="active"><a href="#tab_1-1" data-toggle="tab">Tab 1</a></li>\n' +
    '          <li><a href="#tab_2-2" data-toggle="tab">Tab 2</a></li>\n' +
    '          <li><a href="#tab_3-2" data-toggle="tab">Tab 3</a></li>\n' +
    '          <li class="dropdown">\n' +
    '            <a class="dropdown-toggle" data-toggle="dropdown" href="#">Dropdown <span class="caret"></span></a>\n' +
    '            <ul class="dropdown-menu">\n' +
    '              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>\n' +
    '              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>\n' +
    '              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>\n' +
    '              <li role="presentation" class="divider"></li>\n' +
    '              <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>\n' +
    '            </ul>\n' +
    '          </li>\n' +
    '          <li class="pull-left header"><i class="fa fa-th"></i> Custom Tabs</li>\n' +
    '        </ul>\n' +
    '        <div class="tab-content">\n' +
    '          <div class="tab-pane active" id="tab_1-1">\n' +
    '            <b>How to use:</b>\n' +
    '            <p>Exactly like the original bootstrap tabs except you should use the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>\n' +
    '            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.\n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab_2-2">\n' +
    '            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.\n' +
    '          </div>\n' +
    '          <div class="tab-pane" id="tab_3-2">\n' +
    '            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <h2 class="page-header">Progress Bars</h2>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Progress Bars Different Sizes</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <p><code>.progress</code></p>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">\n' +
    '              <span class="sr-only">40% Complete (success)</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <p>Class: <code>.sm</code></p>\n' +
    '          <div class="progress progress-sm active">\n' +
    '            <div class="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">\n' +
    '              <span class="sr-only">20% Complete</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <p>Class: <code>.xs</code></p>\n' +
    '          <div class="progress progress-xs">\n' +
    '            <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">\n' +
    '              <span class="sr-only">60% Complete (warning)</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <p>Class: <code>.xxs</code></p>\n' +
    '          <div class="progress progress-xxs">\n' +
    '            <div class="progress-bar progress-bar-danger progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">\n' +
    '              <span class="sr-only">60% Complete (warning)</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Progress bars</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar progress-bar-green" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">\n' +
    '              <span class="sr-only">40% Complete (success)</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar progress-bar-aqua" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">\n' +
    '              <span class="sr-only">20% Complete</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar progress-bar-yellow" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">\n' +
    '              <span class="sr-only">60% Complete (warning)</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar progress-bar-red" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">\n' +
    '              <span class="sr-only">80% Complete</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Vertical Progress Bars Different Sizes</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body text-center">\n' +
    '          <p>By adding the class <code>.vertical</code> and <code>.progress-sm</code>, <code>.progress-xs</code> or\n' +
    '            <code>.progress-xxs</code> we achieve:</p>\n' +
    '          <div class="progress vertical active">\n' +
    '            <div class="progress-bar progress-bar-primary progress-bar-striped" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="height: 40%">\n' +
    '              <span class="sr-only">40%</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="progress vertical progress-sm">\n' +
    '            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="height: 100%">\n' +
    '              <span class="sr-only">100%</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="progress vertical progress-xs">\n' +
    '            <div class="progress-bar progress-bar-warning progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="height: 60%">\n' +
    '              <span class="sr-only">60%</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="progress vertical progress-xxs">\n' +
    '            <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="height: 60%">\n' +
    '              <span class="sr-only">60%</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Vertical Progress bars</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body text-center">\n' +
    '          <p>By adding the class <code>.vertical</code> we achieve:</p>\n' +
    '          <div class="progress vertical">\n' +
    '            <div class="progress-bar progress-bar-green" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="height: 40%">\n' +
    '              <span class="sr-only">40%</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="progress vertical">\n' +
    '            <div class="progress-bar progress-bar-aqua" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="height: 20%">\n' +
    '              <span class="sr-only">20%</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="progress vertical">\n' +
    '            <div class="progress-bar progress-bar-yellow" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="height: 60%">\n' +
    '              <span class="sr-only">60%</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="progress vertical">\n' +
    '            <div class="progress-bar progress-bar-red" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="height: 80%">\n' +
    '              <span class="sr-only">80%</span>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <h2 class="page-header">Bootstrap Accordion & Carousel</h2>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Collapsible Accordion</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="box-group" id="accordion">\n' +
    '            <div class="panel box box-primary">\n' +
    '              <div class="box-header with-border">\n' +
    '                <h4 class="box-title">\n' +
    '                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">\n' +
    '                    Collapsible Group Item #1\n' +
    '                  </a>\n' +
    '                </h4>\n' +
    '              </div>\n' +
    '              <div id="collapseOne" class="panel-collapse collapse in">\n' +
    '                <div class="box-body">\n' +
    '                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="panel box box-danger">\n' +
    '              <div class="box-header with-border">\n' +
    '                <h4 class="box-title">\n' +
    '                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">\n' +
    '                    Collapsible Group Danger\n' +
    '                  </a>\n' +
    '                </h4>\n' +
    '              </div>\n' +
    '              <div id="collapseTwo" class="panel-collapse collapse">\n' +
    '                <div class="box-body">\n' +
    '                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="panel box box-success">\n' +
    '              <div class="box-header with-border">\n' +
    '                <h4 class="box-title">\n' +
    '                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">\n' +
    '                    Collapsible Group Success\n' +
    '                  </a>\n' +
    '                </h4>\n' +
    '              </div>\n' +
    '              <div id="collapseThree" class="panel-collapse collapse">\n' +
    '                <div class="box-body">\n' +
    '                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Carousel</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n' +
    '            <ol class="carousel-indicators">\n' +
    '              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n' +
    '              <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>\n' +
    '              <li data-target="#carousel-example-generic" data-slide-to="2" class=""></li>\n' +
    '            </ol>\n' +
    '            <div class="carousel-inner">\n' +
    '              <div class="item active">\n' +
    '                <img src="http://placehold.it/900x500/39CCCC/ffffff&text=I+Love+Bootstrap" alt="First slide">\n' +
    '                <div class="carousel-caption">\n' +
    '                  First Slide\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="item">\n' +
    '                <img src="http://placehold.it/900x500/3c8dbc/ffffff&text=I+Love+Bootstrap" alt="Second slide">\n' +
    '                <div class="carousel-caption">\n' +
    '                  Second Slide\n' +
    '                </div>\n' +
    '              </div>\n' +
    '              <div class="item">\n' +
    '                <img src="http://placehold.it/900x500/f39c12/ffffff&text=I+Love+Bootstrap" alt="Third slide">\n' +
    '                <div class="carousel-caption">\n' +
    '                  Third Slide\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"><span class="fa fa-angle-left"></span></a>\n' +
    '            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next"><span class="fa fa-angle-right"></span></a>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <h2 class="page-header">Typography</h2>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-text-width"></i>\n' +
    '          <h3 class="box-title">Headlines</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <h1>h1. Bootstrap heading</h1>\n' +
    '          <h2>h2. Bootstrap heading</h2>\n' +
    '          <h3>h3. Bootstrap heading</h3>\n' +
    '          <h4>h4. Bootstrap heading</h4>\n' +
    '          <h5>h5. Bootstrap heading</h5>\n' +
    '          <h6>h6. Bootstrap heading</h6>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-text-width"></i>\n' +
    '          <h3 class="box-title">Text Emphasis</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <p class="lead">Lead to emphasize importance</p>\n' +
    '          <p class="text-green">Text green to emphasize success</p>\n' +
    '          <p class="text-aqua">Text aqua to emphasize info</p>\n' +
    '          <p class="text-light-blue">Text light blue to emphasize info (2)</p>\n' +
    '          <p class="text-red">Text red to emphasize danger</p>\n' +
    '          <p class="text-yellow">Text yellow to emphasize warning</p>\n' +
    '          <p class="text-muted">Text muted to emphasize general</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-text-width"></i>\n' +
    '          <h3 class="box-title">Block Quotes</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <blockquote>\n' +
    '            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
    '            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>\n' +
    '          </blockquote>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-text-width"></i>\n' +
    '          <h3 class="box-title">Block Quotes Pulled Right</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body clearfix">\n' +
    '          <blockquote class="pull-right">\n' +
    '            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n' +
    '            <small>Someone famous in <cite title="Source Title">Source Title</cite></small>\n' +
    '          </blockquote>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-4">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-text-width"></i>\n' +
    '          <h3 class="box-title">Unordered List</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <ul>\n' +
    '            <li>Lorem ipsum dolor sit amet</li>\n' +
    '            <li>Consectetur adipiscing elit</li>\n' +
    '            <li>Integer molestie lorem at massa</li>\n' +
    '            <li>Facilisis in pretium nisl aliquet</li>\n' +
    '            <li>Nulla volutpat aliquam velit\n' +
    '              <ul>\n' +
    '                <li>Phasellus iaculis neque</li>\n' +
    '                <li>Purus sodales ultricies</li>\n' +
    '                <li>Vestibulum laoreet porttitor sem</li>\n' +
    '                <li>Ac tristique libero volutpat at</li>\n' +
    '              </ul>\n' +
    '            </li>\n' +
    '            <li>Faucibus porta lacus fringilla vel</li>\n' +
    '            <li>Aenean sit amet erat nunc</li>\n' +
    '            <li>Eget porttitor lorem</li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-4">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-text-width"></i>\n' +
    '          <h3 class="box-title">Ordered Lists</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <ol>\n' +
    '            <li>Lorem ipsum dolor sit amet</li>\n' +
    '            <li>Consectetur adipiscing elit</li>\n' +
    '            <li>Integer molestie lorem at massa</li>\n' +
    '            <li>Facilisis in pretium nisl aliquet</li>\n' +
    '            <li>Nulla volutpat aliquam velit\n' +
    '              <ol>\n' +
    '                <li>Phasellus iaculis neque</li>\n' +
    '                <li>Purus sodales ultricies</li>\n' +
    '                <li>Vestibulum laoreet porttitor sem</li>\n' +
    '                <li>Ac tristique libero volutpat at</li>\n' +
    '              </ol>\n' +
    '            </li>\n' +
    '            <li>Faucibus porta lacus fringilla vel</li>\n' +
    '            <li>Aenean sit amet erat nunc</li>\n' +
    '            <li>Eget porttitor lorem</li>\n' +
    '          </ol>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-4">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-text-width"></i>\n' +
    '          <h3 class="box-title">Unstyled List</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <ul class="list-unstyled">\n' +
    '            <li>Lorem ipsum dolor sit amet</li>\n' +
    '            <li>Consectetur adipiscing elit</li>\n' +
    '            <li>Integer molestie lorem at massa</li>\n' +
    '            <li>Facilisis in pretium nisl aliquet</li>\n' +
    '            <li>Nulla volutpat aliquam velit\n' +
    '              <ul>\n' +
    '                <li>Phasellus iaculis neque</li>\n' +
    '                <li>Purus sodales ultricies</li>\n' +
    '                <li>Vestibulum laoreet porttitor sem</li>\n' +
    '                <li>Ac tristique libero volutpat at</li>\n' +
    '              </ul>\n' +
    '            </li>\n' +
    '            <li>Faucibus porta lacus fringilla vel</li>\n' +
    '            <li>Aenean sit amet erat nunc</li>\n' +
    '            <li>Eget porttitor lorem</li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-text-width"></i>\n' +
    '          <h3 class="box-title">Description</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <dl>\n' +
    '            <dt>Description lists</dt>\n' +
    '            <dd>A description list is perfect for defining terms.</dd>\n' +
    '            <dt>Euismod</dt>\n' +
    '            <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n' +
    '            <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n' +
    '            <dt>Malesuada porta</dt>\n' +
    '            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n' +
    '          </dl>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <i class="fa fa-text-width"></i>\n' +
    '          <h3 class="box-title">Description Horizontal</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <dl class="dl-horizontal">\n' +
    '            <dt>Description lists</dt>\n' +
    '            <dd>A description list is perfect for defining terms.</dd>\n' +
    '            <dt>Euismod</dt>\n' +
    '            <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n' +
    '            <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n' +
    '            <dt>Malesuada porta</dt>\n' +
    '            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n' +
    '            <dt>Felis euismod semper eget lacinia</dt>\n' +
    '            <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.\n' +
    '            </dd>\n' +
    '          </dl>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/ui-icons/ui-icons.component.html',
    '<section class="content-header">\n' +
    '  <h1>Icons <small>a set of beautiful icons</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a href="#">UI</a></li>\n' +
    '    <li class="active">General</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-xs-12">\n' +
    '      <uib-tabset active="activeJustified" justified="true">\n' +
    '        <uib-tab index="0" heading="Font Awesome">\n' +
    '          <div class="box box-primary">\n' +
    '            <div class="box-body">\n' +
    '              <div class="tab-pane" id="fa-icons">\n' +
    '                <section id="new">\n' +
    '                  <h4 class="page-header">66 New Icons in 4.4</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-500px"></i> fa-500px</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-amazon"></i> fa-amazon</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-balance-scale"></i> fa-balance-scale</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-0"></i> fa-battery-0<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-1"></i> fa-battery-1<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-2"></i> fa-battery-2<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-3"></i> fa-battery-3<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-4"></i> fa-battery-4<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-empty"></i> fa-battery-empty</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-full"></i> fa-battery-full</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-half"></i> fa-battery-half</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-quarter"></i> fa-battery-quarter</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-three-quarters"></i> fa-battery-three-quarters</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-black-tie"></i> fa-black-tie</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar-check-o"></i> fa-calendar-check-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar-minus-o"></i> fa-calendar-minus-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar-plus-o"></i> fa-calendar-plus-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar-times-o"></i> fa-calendar-times-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-diners-club"></i> fa-cc-diners-club</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-jcb"></i> fa-cc-jcb</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chrome"></i> fa-chrome</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-clone"></i> fa-clone</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-commenting"></i> fa-commenting</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-commenting-o"></i> fa-commenting-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-contao"></i> fa-contao</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-creative-commons"></i> fa-creative-commons</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-expeditedssl"></i> fa-expeditedssl</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-firefox"></i> fa-firefox</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-fonticons"></i> fa-fonticons</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-genderless"></i> fa-genderless</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-get-pocket"></i> fa-get-pocket</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gg"></i> fa-gg</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gg-circle"></i> fa-gg-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-grab-o"></i> fa-hand-grab-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-lizard-o"></i> fa-hand-lizard-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-paper-o"></i> fa-hand-paper-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-peace-o"></i> fa-hand-peace-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-pointer-o"></i> fa-hand-pointer-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-rock-o"></i> fa-hand-rock-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-scissors-o"></i> fa-hand-scissors-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-spock-o"></i> fa-hand-spock-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-stop-o"></i> fa-hand-stop-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass"></i> fa-hourglass</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-1"></i> fa-hourglass-1<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-2"></i> fa-hourglass-2<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-3"></i> fa-hourglass-3<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-end"></i> fa-hourglass-end</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-half"></i> fa-hourglass-half</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-o"></i> fa-hourglass-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-start"></i> fa-hourglass-start</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-houzz"></i> fa-houzz</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-i-cursor"></i> fa-i-cursor</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-industry"></i> fa-industry</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-internet-explorer"></i> fa-internet-explorer</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-map"></i> fa-map</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-map-o"></i> fa-map-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-map-pin"></i> fa-map-pin</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-map-signs"></i> fa-map-signs</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mouse-pointer"></i> fa-mouse-pointer</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-object-group"></i> fa-object-group</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-object-ungroup"></i> fa-object-ungroup</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-odnoklassniki"></i> fa-odnoklassniki</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-odnoklassniki-square"></i> fa-odnoklassniki-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-opencart"></i> fa-opencart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-opera"></i> fa-opera</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-optin-monster"></i> fa-optin-monster</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-registered"></i> fa-registered</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-safari"></i> fa-safari</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sticky-note"></i> fa-sticky-note</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sticky-note-o"></i> fa-sticky-note-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-television"></i> fa-television</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trademark"></i> fa-trademark</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tripadvisor"></i> fa-tripadvisor</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tv"></i> fa-tv<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-vimeo"></i> fa-vimeo</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-wikipedia-w"></i> fa-wikipedia-w</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-y-combinator"></i> fa-y-combinator</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-yc"></i> fa-yc<span class="text-muted">(alias)</span></div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="web-application">\n' +
    '                  <h4 class="page-header">Web Application Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-adjust"></i> fa-adjust</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-anchor"></i> fa-anchor</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-archive"></i> fa-archive</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-area-chart"></i> fa-area-chart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows"></i> fa-arrows</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-h"></i> fa-arrows-h</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-v"></i> fa-arrows-v</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-asterisk"></i> fa-asterisk</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-at"></i> fa-at</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-automobile"></i> fa-automobile<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-balance-scale"></i> fa-balance-scale</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ban"></i> fa-ban</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bank"></i> fa-bank <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bar-chart"></i> fa-bar-chart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bar-chart-o"></i> fa-bar-chart-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-barcode"></i> fa-barcode</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bars"></i> fa-bars</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-0"></i> fa-battery-0<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-1"></i> fa-battery-1<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-2"></i> fa-battery-2<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-3"></i> fa-battery-3<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-4"></i> fa-battery-4<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-empty"></i> fa-battery-empty</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-full"></i> fa-battery-full</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-half"></i> fa-battery-half</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-quarter"></i> fa-battery-quarter</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-battery-three-quarters"></i> fa-battery-three-quarters</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bed"></i> fa-bed</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-beer"></i> fa-beer</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bell"></i> fa-bell</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bell-o"></i> fa-bell-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bell-slash"></i> fa-bell-slash</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bell-slash-o"></i> fa-bell-slash-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bicycle"></i> fa-bicycle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-binoculars"></i> fa-binoculars</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-birthday-cake"></i> fa-birthday-cake</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bolt"></i> fa-bolt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bomb"></i> fa-bomb</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-book"></i> fa-book</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bookmark"></i> fa-bookmark</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bookmark-o"></i> fa-bookmark-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-briefcase"></i> fa-briefcase</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bug"></i> fa-bug</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-building"></i> fa-building</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-building-o"></i> fa-building-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bullhorn"></i> fa-bullhorn</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bullseye"></i> fa-bullseye</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bus"></i> fa-bus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cab"></i> fa-cab <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calculator"></i> fa-calculator</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar"></i> fa-calendar</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar-check-o"></i> fa-calendar-check-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar-minus-o"></i> fa-calendar-minus-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar-o"></i> fa-calendar-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar-plus-o"></i> fa-calendar-plus-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-calendar-times-o"></i> fa-calendar-times-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-camera"></i> fa-camera</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-camera-retro"></i> fa-camera-retro</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-car"></i> fa-car</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-down"></i> fa-caret-square-o-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-left"></i> fa-caret-square-o-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-right"></i> fa-caret-square-o-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-up"></i> fa-caret-square-o-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cart-arrow-down"></i> fa-cart-arrow-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cart-plus"></i> fa-cart-plus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc"></i> fa-cc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-certificate"></i> fa-certificate</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-check"></i> fa-check</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-check-circle"></i> fa-check-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-check-circle-o"></i> fa-check-circle-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-check-square"></i> fa-check-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-check-square-o"></i> fa-check-square-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-child"></i> fa-child</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-circle"></i> fa-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-circle-o"></i> fa-circle-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-circle-o-notch"></i> fa-circle-o-notch</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-circle-thin"></i> fa-circle-thin</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-clock-o"></i> fa-clock-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-clone"></i> fa-clone</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-close"></i> fa-close <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cloud"></i> fa-cloud</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cloud-download"></i> fa-cloud-download</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cloud-upload"></i> fa-cloud-upload</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-code"></i> fa-code</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-code-fork"></i> fa-code-fork</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-coffee"></i> fa-coffee</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cog"></i> fa-cog</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cogs"></i> fa-cogs</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-comment"></i> fa-comment</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-comment-o"></i> fa-comment-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-commenting"></i> fa-commenting</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-commenting-o"></i> fa-commenting-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-comments"></i> fa-comments</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-comments-o"></i> fa-comments-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-compass"></i> fa-compass</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-copyright"></i> fa-copyright</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-creative-commons"></i> fa-creative-commons</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-credit-card"></i> fa-credit-card</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-crop"></i> fa-crop</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-crosshairs"></i> fa-crosshairs</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cube"></i> fa-cube</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cubes"></i> fa-cubes</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cutlery"></i> fa-cutlery</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-dashboard"></i> fa-dashboard<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-database"></i> fa-database</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-desktop"></i> fa-desktop</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-diamond"></i> fa-diamond</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-dot-circle-o"></i> fa-dot-circle-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-download"></i> fa-download</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-edit"></i> fa-edit <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ellipsis-h"></i> fa-ellipsis-h</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ellipsis-v"></i> fa-ellipsis-v</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-envelope"></i> fa-envelope</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-envelope-o"></i> fa-envelope-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-envelope-square"></i> fa-envelope-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-eraser"></i> fa-eraser</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-exchange"></i> fa-exchange</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-exclamation"></i> fa-exclamation</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-exclamation-circle"></i> fa-exclamation-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-exclamation-triangle"></i> fa-exclamation-triangle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-external-link"></i> fa-external-link</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-external-link-square"></i> fa-external-link-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-eye"></i> fa-eye</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-eye-slash"></i> fa-eye-slash</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-eyedropper"></i> fa-eyedropper</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-fax"></i> fa-fax</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-feed"></i> fa-feed <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-female"></i> fa-female</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-fighter-jet"></i> fa-fighter-jet</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-archive-o"></i> fa-file-archive-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-audio-o"></i> fa-file-audio-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-code-o"></i> fa-file-code-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-excel-o"></i> fa-file-excel-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-image-o"></i> fa-file-image-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-movie-o"></i> fa-file-movie-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-pdf-o"></i> fa-file-pdf-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-photo-o"></i> fa-file-photo-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-picture-o"></i> fa-file-picture-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-powerpoint-o"></i> fa-file-powerpoint-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-sound-o"></i> fa-file-sound-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-video-o"></i> fa-file-video-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-word-o"></i> fa-file-word-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-zip-o"></i> fa-file-zip-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-film"></i> fa-film</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-filter"></i> fa-filter</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-fire"></i> fa-fire</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-fire-extinguisher"></i> fa-fire-extinguisher</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-flag"></i> fa-flag</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-flag-checkered"></i> fa-flag-checkered</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-flag-o"></i> fa-flag-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-flash"></i> fa-flash <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-flask"></i> fa-flask</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-folder"></i> fa-folder</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-folder-o"></i> fa-folder-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-folder-open"></i> fa-folder-open</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-folder-open-o"></i> fa-folder-open-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-frown-o"></i> fa-frown-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-futbol-o"></i> fa-futbol-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gamepad"></i> fa-gamepad</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gavel"></i> fa-gavel</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gear"></i> fa-gear <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gears"></i> fa-gears <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gift"></i> fa-gift</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-glass"></i> fa-glass</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-globe"></i> fa-globe</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-graduation-cap"></i> fa-graduation-cap</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-group"></i> fa-group <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-grab-o"></i> fa-hand-grab-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-lizard-o"></i> fa-hand-lizard-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-paper-o"></i> fa-hand-paper-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-peace-o"></i> fa-hand-peace-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-pointer-o"></i> fa-hand-pointer-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-rock-o"></i> fa-hand-rock-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-scissors-o"></i> fa-hand-scissors-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-spock-o"></i> fa-hand-spock-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-stop-o"></i> fa-hand-stop-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hdd-o"></i> fa-hdd-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-headphones"></i> fa-headphones</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-heart"></i> fa-heart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-heart-o"></i> fa-heart-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-heartbeat"></i> fa-heartbeat</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-history"></i> fa-history</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-home"></i> fa-home</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hotel"></i> fa-hotel <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass"></i> fa-hourglass</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-1"></i> fa-hourglass-1<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-2"></i> fa-hourglass-2<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-3"></i> fa-hourglass-3<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-end"></i> fa-hourglass-end</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-half"></i> fa-hourglass-half</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-o"></i> fa-hourglass-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hourglass-start"></i> fa-hourglass-start</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-i-cursor"></i> fa-i-cursor</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-image"></i> fa-image <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-inbox"></i> fa-inbox</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-industry"></i> fa-industry</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-info"></i> fa-info</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-info-circle"></i> fa-info-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-institution"></i> fa-institution<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-key"></i> fa-key</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-keyboard-o"></i> fa-keyboard-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-language"></i> fa-language</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-laptop"></i> fa-laptop</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-leaf"></i> fa-leaf</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-legal"></i> fa-legal <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-lemon-o"></i> fa-lemon-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-level-down"></i> fa-level-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-level-up"></i> fa-level-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-life-bouy"></i> fa-life-bouy<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-life-buoy"></i> fa-life-buoy<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-life-ring"></i> fa-life-ring</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-life-saver"></i> fa-life-saver<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-lightbulb-o"></i> fa-lightbulb-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-line-chart"></i> fa-line-chart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-location-arrow"></i> fa-location-arrow</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-lock"></i> fa-lock</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-magic"></i> fa-magic</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-magnet"></i> fa-magnet</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mail-forward"></i> fa-mail-forward<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mail-reply"></i> fa-mail-reply<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mail-reply-all"></i> fa-mail-reply-all<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-male"></i> fa-male</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-map"></i> fa-map</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-map-marker"></i> fa-map-marker</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-map-o"></i> fa-map-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-map-pin"></i> fa-map-pin</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-map-signs"></i> fa-map-signs</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-meh-o"></i> fa-meh-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-microphone"></i> fa-microphone</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-microphone-slash"></i> fa-microphone-slash</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-minus"></i> fa-minus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-minus-circle"></i> fa-minus-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-minus-square"></i> fa-minus-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-minus-square-o"></i> fa-minus-square-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mobile"></i> fa-mobile</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mobile-phone"></i> fa-mobile-phone<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-money"></i> fa-money</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-moon-o"></i> fa-moon-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mortar-board"></i> fa-mortar-board<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-motorcycle"></i> fa-motorcycle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mouse-pointer"></i> fa-mouse-pointer</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-music"></i> fa-music</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-navicon"></i> fa-navicon<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-newspaper-o"></i> fa-newspaper-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-object-group"></i> fa-object-group</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-object-ungroup"></i> fa-object-ungroup</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-paint-brush"></i> fa-paint-brush</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-paper-plane"></i> fa-paper-plane</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-paper-plane-o"></i> fa-paper-plane-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-paw"></i> fa-paw</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pencil"></i> fa-pencil</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pencil-square"></i> fa-pencil-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pencil-square-o"></i> fa-pencil-square-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-phone"></i> fa-phone</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-phone-square"></i> fa-phone-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-photo"></i> fa-photo <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-picture-o"></i> fa-picture-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pie-chart"></i> fa-pie-chart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plane"></i> fa-plane</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plug"></i> fa-plug</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plus"></i> fa-plus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plus-circle"></i> fa-plus-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plus-square"></i> fa-plus-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plus-square-o"></i> fa-plus-square-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-power-off"></i> fa-power-off</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-print"></i> fa-print</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-puzzle-piece"></i> fa-puzzle-piece</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-qrcode"></i> fa-qrcode</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-question"></i> fa-question</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-question-circle"></i> fa-question-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-quote-left"></i> fa-quote-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-quote-right"></i> fa-quote-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-random"></i> fa-random</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-recycle"></i> fa-recycle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-refresh"></i> fa-refresh</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-registered"></i> fa-registered</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-remove"></i> fa-remove<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-reorder"></i> fa-reorder<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-reply"></i> fa-reply</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-reply-all"></i> fa-reply-all</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-retweet"></i> fa-retweet</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-road"></i> fa-road</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rocket"></i> fa-rocket</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rss"></i> fa-rss</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rss-square"></i> fa-rss-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-search"></i> fa-search</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-search-minus"></i> fa-search-minus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-search-plus"></i> fa-search-plus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-send"></i> fa-send <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-send-o"></i> fa-send-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-server"></i> fa-server</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-share"></i> fa-share</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-share-alt"></i> fa-share-alt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-share-alt-square"></i> fa-share-alt-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-share-square"></i> fa-share-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-share-square-o"></i> fa-share-square-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-shield"></i> fa-shield</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ship"></i> fa-ship</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-shopping-cart"></i> fa-shopping-cart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sign-in"></i> fa-sign-in</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sign-out"></i> fa-sign-out</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-signal"></i> fa-signal</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sitemap"></i> fa-sitemap</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sliders"></i> fa-sliders</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-smile-o"></i> fa-smile-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-soccer-ball-o"></i> fa-soccer-ball-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort"></i> fa-sort</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-alpha-asc"></i> fa-sort-alpha-asc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-alpha-desc"></i> fa-sort-alpha-desc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-amount-asc"></i> fa-sort-amount-asc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-amount-desc"></i> fa-sort-amount-desc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-asc"></i> fa-sort-asc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-desc"></i> fa-sort-desc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-down"></i> fa-sort-down<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-numeric-asc"></i> fa-sort-numeric-asc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-numeric-desc"></i> fa-sort-numeric-desc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sort-up"></i> fa-sort-up<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-space-shuttle"></i> fa-space-shuttle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-spinner"></i> fa-spinner</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-spoon"></i> fa-spoon</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-square"></i> fa-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-square-o"></i> fa-square-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-star"></i> fa-star</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-star-half"></i> fa-star-half</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-star-half-empty"></i> fa-star-half-empty<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-star-half-full"></i> fa-star-half-full<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-star-half-o"></i> fa-star-half-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-star-o"></i> fa-star-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sticky-note"></i> fa-sticky-note</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sticky-note-o"></i> fa-sticky-note-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-street-view"></i> fa-street-view</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-suitcase"></i> fa-suitcase</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sun-o"></i> fa-sun-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-support"></i> fa-support<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tablet"></i> fa-tablet</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tachometer"></i> fa-tachometer</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tag"></i> fa-tag</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tags"></i> fa-tags</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tasks"></i> fa-tasks</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-taxi"></i> fa-taxi</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-television"></i> fa-television</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-terminal"></i> fa-terminal</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-thumb-tack"></i> fa-thumb-tack</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-thumbs-down"></i> fa-thumbs-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-thumbs-o-down"></i> fa-thumbs-o-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-thumbs-o-up"></i> fa-thumbs-o-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-thumbs-up"></i> fa-thumbs-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ticket"></i> fa-ticket</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-times"></i> fa-times</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-times-circle"></i> fa-times-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-times-circle-o"></i> fa-times-circle-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tint"></i> fa-tint</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-down"></i> fa-toggle-down<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-left"></i> fa-toggle-left<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-off"></i> fa-toggle-off</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-on"></i> fa-toggle-on</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-right"></i> fa-toggle-right<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-up"></i> fa-toggle-up<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trademark"></i> fa-trademark</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trash"></i> fa-trash</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trash-o"></i> fa-trash-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tree"></i> fa-tree</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trophy"></i> fa-trophy</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-truck"></i> fa-truck</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tty"></i> fa-tty</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tv"></i> fa-tv<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-umbrella"></i> fa-umbrella</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-university"></i> fa-university</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-unlock"></i> fa-unlock</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-unlock-alt"></i> fa-unlock-alt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-unsorted"></i> fa-unsorted<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-upload"></i> fa-upload</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-user"></i> fa-user</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-user-plus"></i> fa-user-plus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-user-secret"></i> fa-user-secret</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-user-times"></i> fa-user-times</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-users"></i> fa-users</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-video-camera"></i> fa-video-camera</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-volume-down"></i> fa-volume-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-volume-off"></i> fa-volume-off</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-volume-up"></i> fa-volume-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-warning"></i> fa-warning<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-wheelchair"></i> fa-wheelchair</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-wifi"></i> fa-wifi</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-wrench"></i> fa-wrench</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="hand">\n' +
    '                  <h4 class="page-header">Hand Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-grab-o"></i> fa-hand-grab-o\n' +
    '                      <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-lizard-o"></i> fa-hand-lizard-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-down"></i> fa-hand-o-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-left"></i> fa-hand-o-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-right"></i> fa-hand-o-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-up"></i> fa-hand-o-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-paper-o"></i> fa-hand-paper-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-peace-o"></i> fa-hand-peace-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-pointer-o"></i> fa-hand-pointer-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-rock-o"></i> fa-hand-rock-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-scissors-o"></i> fa-hand-scissors-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-spock-o"></i> fa-hand-spock-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-stop-o"></i> fa-hand-stop-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-thumbs-down"></i> fa-thumbs-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-thumbs-o-down"></i> fa-thumbs-o-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-thumbs-o-up"></i> fa-thumbs-o-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-thumbs-up"></i> fa-thumbs-up</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="transportation">\n' +
    '                  <h4 class="page-header">Transportation Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ambulance"></i> fa-ambulance</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-automobile"></i> fa-automobile\n' +
    '                      <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bicycle"></i> fa-bicycle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bus"></i> fa-bus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cab"></i> fa-cab <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-car"></i> fa-car</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-fighter-jet"></i> fa-fighter-jet</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-motorcycle"></i> fa-motorcycle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plane"></i> fa-plane</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rocket"></i> fa-rocket</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ship"></i> fa-ship</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-space-shuttle"></i> fa-space-shuttle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-subway"></i> fa-subway</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-taxi"></i> fa-taxi</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-train"></i> fa-train</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-truck"></i> fa-truck</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-wheelchair"></i> fa-wheelchair</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="gender">\n' +
    '                  <h4 class="page-header">Gender Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-genderless"></i> fa-genderless</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-intersex"></i> fa-intersex<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mars"></i> fa-mars</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mars-double"></i> fa-mars-double</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mars-stroke"></i> fa-mars-stroke</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mars-stroke-h"></i> fa-mars-stroke-h</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mars-stroke-v"></i> fa-mars-stroke-v</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-mercury"></i> fa-mercury</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-neuter"></i> fa-neuter</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-transgender"></i> fa-transgender</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-transgender-alt"></i> fa-transgender-alt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-venus"></i> fa-venus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-venus-double"></i> fa-venus-double</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-venus-mars"></i> fa-venus-mars</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="file-type">\n' +
    '                  <h2 class="page-header">File Type Icons</h2>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file"></i> fa-file</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-archive-o"></i> fa-file-archive-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-audio-o"></i> fa-file-audio-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-code-o"></i> fa-file-code-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-excel-o"></i> fa-file-excel-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-image-o"></i> fa-file-image-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-movie-o"></i> fa-file-movie-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-o"></i> fa-file-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-pdf-o"></i> fa-file-pdf-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-photo-o"></i> fa-file-photo-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-picture-o"></i> fa-file-picture-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-powerpoint-o"></i> fa-file-powerpoint-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-sound-o"></i> fa-file-sound-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-text"></i> fa-file-text</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-text-o"></i> fa-file-text-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-video-o"></i> fa-file-video-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-word-o"></i> fa-file-word-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-zip-o"></i> fa-file-zip-o<span class="text-muted">(alias)</span></div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="spinner">\n' +
    '                  <h2 class="page-header">Spinner Icons</h2>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-circle-o-notch"></i> fa-circle-o-notch</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cog"></i> fa-cog</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gear"></i> fa-gear <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-refresh"></i> fa-refresh</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-spinner"></i> fa-spinner</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="form-control">\n' +
    '                  <h4 class="page-header">Form Control Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-check-square"></i> fa-check-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-check-square-o"></i> fa-check-square-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-circle"></i> fa-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-circle-o"></i> fa-circle-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-dot-circle-o"></i> fa-dot-circle-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-minus-square"></i> fa-minus-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-minus-square-o"></i> fa-minus-square-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plus-square"></i> fa-plus-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plus-square-o"></i> fa-plus-square-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-square"></i> fa-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-square-o"></i> fa-square-o</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="payment">\n' +
    '                  <h4 class="page-header">Payment Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-amex"></i> fa-cc-amex</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-diners-club"></i> fa-cc-diners-club</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-discover"></i> fa-cc-discover</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-jcb"></i> fa-cc-jcb</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-mastercard"></i> fa-cc-mastercard</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-paypal"></i> fa-cc-paypal</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-stripe"></i> fa-cc-stripe</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-visa"></i> fa-cc-visa</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-credit-card"></i> fa-credit-card</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-google-wallet"></i> fa-google-wallet</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-paypal"></i> fa-paypal</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="chart">\n' +
    '                  <h4 class="page-header">Chart Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-area-chart"></i> fa-area-chart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bar-chart"></i> fa-bar-chart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bar-chart-o"></i> fa-bar-chart-o<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-line-chart"></i> fa-line-chart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pie-chart"></i> fa-pie-chart</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="currency">\n' +
    '                  <h4 class="page-header">Currency Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bitcoin"></i> fa-bitcoin\n' +
    '                      <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-btc"></i> fa-btc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cny"></i> fa-cny <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-dollar"></i> fa-dollar<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-eur"></i> fa-eur</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-euro"></i> fa-euro <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gbp"></i> fa-gbp</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gg"></i> fa-gg</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gg-circle"></i> fa-gg-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ils"></i> fa-ils</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-inr"></i> fa-inr</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-jpy"></i> fa-jpy</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-krw"></i> fa-krw</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-money"></i> fa-money</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rmb"></i> fa-rmb <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rouble"></i> fa-rouble<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rub"></i> fa-rub</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ruble"></i> fa-ruble <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rupee"></i> fa-rupee <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-shekel"></i> fa-shekel<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sheqel"></i> fa-sheqel<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-try"></i> fa-try</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-turkish-lira"></i> fa-turkish-lira<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-usd"></i> fa-usd</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-won"></i> fa-won <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-yen"></i> fa-yen <span class="text-muted">(alias)</span>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="text-editor">\n' +
    '                  <h4 class="page-header">Text Editor Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-align-center"></i> fa-align-center</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-align-justify"></i> fa-align-justify</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-align-left"></i> fa-align-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-align-right"></i> fa-align-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bold"></i> fa-bold</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chain"></i> fa-chain <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chain-broken"></i> fa-chain-broken</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-clipboard"></i> fa-clipboard</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-columns"></i> fa-columns</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-copy"></i> fa-copy <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cut"></i> fa-cut <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-dedent"></i> fa-dedent<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-eraser"></i> fa-eraser</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file"></i> fa-file</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-o"></i> fa-file-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-text"></i> fa-file-text</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-file-text-o"></i> fa-file-text-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-files-o"></i> fa-files-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-floppy-o"></i> fa-floppy-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-font"></i> fa-font</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-header"></i> fa-header</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-indent"></i> fa-indent</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-italic"></i> fa-italic</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-link"></i> fa-link</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-list"></i> fa-list</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-list-alt"></i> fa-list-alt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-list-ol"></i> fa-list-ol</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-list-ul"></i> fa-list-ul</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-outdent"></i> fa-outdent</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-paperclip"></i> fa-paperclip</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-paragraph"></i> fa-paragraph</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-paste"></i> fa-paste <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-repeat"></i> fa-repeat</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rotate-left"></i> fa-rotate-left<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rotate-right"></i> fa-rotate-right<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-save"></i> fa-save <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-scissors"></i> fa-scissors</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-strikethrough"></i> fa-strikethrough</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-subscript"></i> fa-subscript</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-superscript"></i> fa-superscript</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-table"></i> fa-table</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-text-height"></i> fa-text-height</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-text-width"></i> fa-text-width</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-th"></i> fa-th</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-th-large"></i> fa-th-large</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-th-list"></i> fa-th-list</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-underline"></i> fa-underline</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-undo"></i> fa-undo</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-unlink"></i> fa-unlink\n' +
    '                      <span class="text-muted">(alias)</span></div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="directional">\n' +
    '                  <h4 class="page-header">Directional Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-double-down"></i> fa-angle-double-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-double-left"></i> fa-angle-double-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-double-right"></i> fa-angle-double-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-double-up"></i> fa-angle-double-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-down"></i> fa-angle-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-left"></i> fa-angle-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-right"></i> fa-angle-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-angle-up"></i> fa-angle-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-down"></i> fa-arrow-circle-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-left"></i> fa-arrow-circle-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-o-down"></i> fa-arrow-circle-o-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-o-left"></i> fa-arrow-circle-o-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-o-right"></i> fa-arrow-circle-o-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-o-up"></i> fa-arrow-circle-o-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-right"></i> fa-arrow-circle-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-circle-up"></i> fa-arrow-circle-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-down"></i> fa-arrow-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-left"></i> fa-arrow-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-right"></i> fa-arrow-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrow-up"></i> fa-arrow-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows"></i> fa-arrows</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-alt"></i> fa-arrows-alt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-h"></i> fa-arrows-h</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-v"></i> fa-arrows-v</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-down"></i> fa-caret-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-left"></i> fa-caret-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-right"></i> fa-caret-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-down"></i> fa-caret-square-o-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-left"></i> fa-caret-square-o-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-right"></i> fa-caret-square-o-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-square-o-up"></i> fa-caret-square-o-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-caret-up"></i> fa-caret-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-circle-down"></i> fa-chevron-circle-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-circle-left"></i> fa-chevron-circle-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-circle-right"></i> fa-chevron-circle-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-circle-up"></i> fa-chevron-circle-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-down"></i> fa-chevron-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-left"></i> fa-chevron-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-right"></i> fa-chevron-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chevron-up"></i> fa-chevron-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-exchange"></i> fa-exchange</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-down"></i> fa-hand-o-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-left"></i> fa-hand-o-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-right"></i> fa-hand-o-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hand-o-up"></i> fa-hand-o-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-long-arrow-down"></i> fa-long-arrow-down</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-long-arrow-left"></i> fa-long-arrow-left</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-long-arrow-right"></i> fa-long-arrow-right</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-long-arrow-up"></i> fa-long-arrow-up</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-down"></i> fa-toggle-down<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-left"></i> fa-toggle-left<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-right"></i> fa-toggle-right<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-toggle-up"></i> fa-toggle-up<span class="text-muted">(alias)</span></div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="video-player">\n' +
    '                  <h4 class="page-header">Video Player Icons</h4>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-arrows-alt"></i> fa-arrows-alt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-backward"></i> fa-backward</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-compress"></i> fa-compress</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-eject"></i> fa-eject</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-expand"></i> fa-expand</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-fast-backward"></i> fa-fast-backward</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-fast-forward"></i> fa-fast-forward</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-forward"></i> fa-forward</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pause"></i> fa-pause</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-play"></i> fa-play</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-play-circle"></i> fa-play-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-play-circle-o"></i> fa-play-circle-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-random"></i> fa-random</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-step-backward"></i> fa-step-backward</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-step-forward"></i> fa-step-forward</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-stop"></i> fa-stop</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-youtube-play"></i> fa-youtube-play</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="brand">\n' +
    '                  <h4 class="page-header">Brand Icons</h4>\n' +
    '                  <div class="alert alert-info">\n' +
    '                    <ul class="margin-bottom-none padding-left-lg">\n' +
    '                      <li>All brand icons are trademarks of their respective owners.</li>\n' +
    '                      <li>The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.\n' +
    '                      </li>\n' +
    '                    </ul>\n' +
    '                  </div>\n' +
    '                  <div class="row fontawesome-icon-list">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-500px"></i> fa-500px</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-adn"></i> fa-adn</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-amazon"></i> fa-amazon</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-android"></i> fa-android</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-angellist"></i> fa-angellist</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-apple"></i> fa-apple</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-behance"></i> fa-behance</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-behance-square"></i> fa-behance-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bitbucket"></i> fa-bitbucket</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bitbucket-square"></i> fa-bitbucket-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-bitcoin"></i> fa-bitcoin<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-black-tie"></i> fa-black-tie</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-btc"></i> fa-btc</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-buysellads"></i> fa-buysellads</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-amex"></i> fa-cc-amex</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-diners-club"></i> fa-cc-diners-club</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-discover"></i> fa-cc-discover</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-jcb"></i> fa-cc-jcb</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-mastercard"></i> fa-cc-mastercard</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-paypal"></i> fa-cc-paypal</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-stripe"></i> fa-cc-stripe</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-cc-visa"></i> fa-cc-visa</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-chrome"></i> fa-chrome</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-codepen"></i> fa-codepen</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-connectdevelop"></i> fa-connectdevelop</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-contao"></i> fa-contao</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-css3"></i> fa-css3</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-dashcube"></i> fa-dashcube</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-delicious"></i> fa-delicious</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-deviantart"></i> fa-deviantart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-digg"></i> fa-digg</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-dribbble"></i> fa-dribbble</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-dropbox"></i> fa-dropbox</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-drupal"></i> fa-drupal</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-empire"></i> fa-empire</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-expeditedssl"></i> fa-expeditedssl</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-facebook"></i> fa-facebook</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-facebook-f"></i> fa-facebook-f<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-facebook-official"></i> fa-facebook-official</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-facebook-square"></i> fa-facebook-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-firefox"></i> fa-firefox</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-flickr"></i> fa-flickr</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-fonticons"></i> fa-fonticons</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-forumbee"></i> fa-forumbee</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-foursquare"></i> fa-foursquare</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ge"></i> fa-ge<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-get-pocket"></i> fa-get-pocket</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gg"></i> fa-gg</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gg-circle"></i> fa-gg-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-git"></i> fa-git</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-git-square"></i> fa-git-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-github"></i> fa-github</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-github-alt"></i> fa-github-alt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-github-square"></i> fa-github-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gittip"></i> fa-gittip<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-google"></i> fa-google</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-google-plus"></i> fa-google-plus</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-google-plus-square"></i> fa-google-plus-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-google-wallet"></i> fa-google-wallet</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-gratipay"></i> fa-gratipay</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hacker-news"></i> fa-hacker-news</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-houzz"></i> fa-houzz</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-html5"></i> fa-html5</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-instagram"></i> fa-instagram</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-internet-explorer"></i> fa-internet-explorer</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ioxhost"></i> fa-ioxhost</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-joomla"></i> fa-joomla</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-jsfiddle"></i> fa-jsfiddle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-lastfm"></i> fa-lastfm</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-lastfm-square"></i> fa-lastfm-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-leanpub"></i> fa-leanpub</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-linkedin"></i> fa-linkedin</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-linkedin-square"></i> fa-linkedin-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-linux"></i> fa-linux</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-maxcdn"></i> fa-maxcdn</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-meanpath"></i> fa-meanpath</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-medium"></i> fa-medium</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-odnoklassniki"></i> fa-odnoklassniki</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-odnoklassniki-square"></i> fa-odnoklassniki-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-opencart"></i> fa-opencart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-openid"></i> fa-openid</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-opera"></i> fa-opera</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-optin-monster"></i> fa-optin-monster</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pagelines"></i> fa-pagelines</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-paypal"></i> fa-paypal</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pied-piper"></i> fa-pied-piper</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pied-piper-alt"></i> fa-pied-piper-alt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pinterest"></i> fa-pinterest</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pinterest-p"></i> fa-pinterest-p</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-pinterest-square"></i> fa-pinterest-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-qq"></i> fa-qq</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ra"></i> fa-ra<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-rebel"></i> fa-rebel</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-reddit"></i> fa-reddit</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-reddit-square"></i> fa-reddit-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-renren"></i> fa-renren</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-safari"></i> fa-safari</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-sellsy"></i> fa-sellsy</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-share-alt"></i> fa-share-alt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-share-alt-square"></i> fa-share-alt-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-shirtsinbulk"></i> fa-shirtsinbulk</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-simplybuilt"></i> fa-simplybuilt</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-skyatlas"></i> fa-skyatlas</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-skype"></i> fa-skype</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-slack"></i> fa-slack</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-slideshare"></i> fa-slideshare</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-soundcloud"></i> fa-soundcloud</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-spotify"></i> fa-spotify</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-stack-exchange"></i> fa-stack-exchange</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-stack-overflow"></i> fa-stack-overflow</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-steam"></i> fa-steam</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-steam-square"></i> fa-steam-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-stumbleupon"></i> fa-stumbleupon</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-stumbleupon-circle"></i> fa-stumbleupon-circle</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tencent-weibo"></i> fa-tencent-weibo</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-trello"></i> fa-trello</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tripadvisor"></i> fa-tripadvisor</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tumblr"></i> fa-tumblr</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-tumblr-square"></i> fa-tumblr-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-twitch"></i> fa-twitch</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-twitter"></i> fa-twitter</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-twitter-square"></i> fa-twitter-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-viacoin"></i> fa-viacoin</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-vimeo"></i> fa-vimeo</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-vimeo-square"></i> fa-vimeo-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-vine"></i> fa-vine</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-vk"></i> fa-vk</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-wechat"></i> fa-wechat<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-weibo"></i> fa-weibo</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-weixin"></i> fa-weixin</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-whatsapp"></i> fa-whatsapp</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-wikipedia-w"></i> fa-wikipedia-w</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-windows"></i> fa-windows</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-wordpress"></i> fa-wordpress</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-xing"></i> fa-xing</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-xing-square"></i> fa-xing-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-y-combinator"></i> fa-y-combinator</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-y-combinator-square"></i> fa-y-combinator-square <span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-yahoo"></i> fa-yahoo</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-yc"></i> fa-yc<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-yc-square"></i> fa-yc-square<span class="text-muted">(alias)</span></div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-yelp"></i> fa-yelp</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-youtube"></i> fa-youtube</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-youtube-play"></i> fa-youtube-play</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-youtube-square"></i> fa-youtube-square</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '                <section id="medical">\n' +
    '                  <h4 class="page-header">Medical Icons</h4>\n' +
    '                  <div class="row">\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-ambulance"></i> fa-ambulance</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-h-square"></i> fa-h-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-heart"></i> fa-heart</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-heart-o"></i> fa-heart-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-heartbeat"></i> fa-heartbeat</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-hospital-o"></i> fa-hospital-o</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-medkit"></i> fa-medkit</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-plus-square"></i> fa-plus-square</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-stethoscope"></i> fa-stethoscope</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-user-md"></i> fa-user-md</div>\n' +
    '                    <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-wheelchair"></i> fa-wheelchair</div>\n' +
    '                  </div>\n' +
    '                </section>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </uib-tab>\n' +
    '        <uib-tab index="1" heading="Glyphicons">\n' +
    '          <div class="box box-danger">\n' +
    '            <div class="box-body">\n' +
    '              <div class="tab-pane" id="glyphicons">\n' +
    '                <ul class="bs-glyphicons">\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-asterisk"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-asterisk</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-plus"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-plus</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-euro"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-euro</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-eur"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-eur</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-minus"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-minus</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-cloud"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-cloud</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-envelope"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-envelope</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-pencil"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-pencil</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-glass"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-glass</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-music"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-music</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-search"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-search</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-heart"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-heart</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-star"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-star</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-star-empty"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-star-empty</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-user"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-user</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-film"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-film</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-th-large"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-th-large</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-th"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-th</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-th-list"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-th-list</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-ok"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-ok</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-remove"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-remove</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-zoom-in"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-zoom-in</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-zoom-out"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-zoom-out</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-off"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-off</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-signal"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-signal</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-cog"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-cog</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-trash"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-trash</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-home"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-home</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-file"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-file</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-time"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-time</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-road"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-road</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-download-alt"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-download-alt</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-download"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-download</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-upload"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-upload</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-inbox"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-inbox</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-play-circle"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-play-circle</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-repeat"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-repeat</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-refresh"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-refresh</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-list-alt"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-list-alt</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-lock"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-lock</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-flag"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-flag</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-headphones"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-headphones</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-volume-off"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-volume-off</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-volume-down"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-volume-down</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-volume-up"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-volume-up</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-qrcode"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-qrcode</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-barcode"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-barcode</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-tag"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-tag</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-tags"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-tags</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-book"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-book</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-bookmark"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-bookmark</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-print"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-print</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-camera"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-camera</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-font"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-font</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-bold"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-bold</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-italic"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-italic</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-text-height"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-text-height</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-text-width"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-text-width</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-align-left"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-align-left</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-align-center"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-align-center</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-align-right"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-align-right</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-align-justify"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-align-justify</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-list"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-list</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-indent-left"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-indent-left</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-indent-right"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-indent-right</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-facetime-video"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-facetime-video</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-picture"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-picture</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-map-marker"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-map-marker</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-adjust"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-adjust</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-tint"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-tint</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-edit"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-edit</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-share"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-share</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-check"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-check</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-move"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-move</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-step-backward"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-step-backward</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-fast-backward"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-fast-backward</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-backward"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-backward</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-play"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-play</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-pause"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-pause</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-stop"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-stop</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-forward"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-forward</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-fast-forward"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-fast-forward</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-step-forward"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-step-forward</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-eject"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-eject</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-chevron-left"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-chevron-left</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-chevron-right"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-chevron-right</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-plus-sign"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-plus-sign</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-minus-sign"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-minus-sign</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-remove-sign"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-remove-sign</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-ok-sign"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-ok-sign</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-question-sign"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-question-sign</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-info-sign"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-info-sign</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-screenshot"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-screenshot</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-remove-circle"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-remove-circle</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-ok-circle"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-ok-circle</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-ban-circle"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-ban-circle</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-arrow-left"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-arrow-left</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-arrow-right"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-arrow-right</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-arrow-up"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-arrow-up</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-arrow-down"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-arrow-down</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-share-alt"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-share-alt</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-resize-full"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-resize-full</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-resize-small"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-resize-small</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-exclamation-sign"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-exclamation-sign</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-gift"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-gift</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-leaf"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-leaf</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-fire"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-fire</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-eye-open"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-eye-open</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-eye-close"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-eye-close</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-warning-sign"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-warning-sign</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-plane"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-plane</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-calendar"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-calendar</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-random"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-random</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-comment"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-comment</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-magnet"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-magnet</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-chevron-up"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-chevron-up</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-chevron-down"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-chevron-down</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-retweet"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-retweet</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-shopping-cart"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-shopping-cart</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-folder-close"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-folder-close</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-folder-open"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-folder-open</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-resize-vertical"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-resize-vertical</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-resize-horizontal"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-resize-horizontal</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-hdd"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-hdd</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-bullhorn"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-bullhorn</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-bell"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-bell</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-certificate"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-certificate</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-thumbs-up"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-thumbs-up</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-thumbs-down"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-thumbs-down</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-hand-right"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-hand-right</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-hand-left"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-hand-left</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-hand-up"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-hand-up</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-hand-down"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-hand-down</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-circle-arrow-right"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-circle-arrow-right</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-circle-arrow-left"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-circle-arrow-left</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-circle-arrow-up"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-circle-arrow-up</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-circle-arrow-down"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-circle-arrow-down</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-globe"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-globe</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-wrench"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-wrench</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-tasks"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-tasks</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-filter"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-filter</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-briefcase"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-briefcase</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-fullscreen"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-fullscreen</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-dashboard"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-dashboard</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-paperclip"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-paperclip</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-heart-empty"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-heart-empty</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-link"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-link</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-phone"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-phone</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-pushpin"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-pushpin</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-usd"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-usd</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-gbp"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-gbp</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sort"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sort</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sort-by-alphabet"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sort-by-alphabet</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sort-by-alphabet-alt"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sort-by-alphabet-alt</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sort-by-order"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sort-by-order</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sort-by-order-alt"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sort-by-order-alt</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sort-by-attributes"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sort-by-attributes</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sort-by-attributes-alt</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-unchecked"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-unchecked</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-expand"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-expand</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-collapse-down"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-collapse-down</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-collapse-up"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-collapse-up</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-log-in"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-log-in</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-flash"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-flash</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-log-out"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-log-out</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-new-window"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-new-window</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-record"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-record</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-save"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-save</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-open"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-open</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-saved"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-saved</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-import"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-import</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-export"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-export</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-send"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-send</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-floppy-disk"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-floppy-disk</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-floppy-saved"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-floppy-saved</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-floppy-remove"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-floppy-remove</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-floppy-save"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-floppy-save</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-floppy-open"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-floppy-open</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-credit-card"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-credit-card</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-transfer"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-transfer</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-cutlery"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-cutlery</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-header"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-header</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-compressed"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-compressed</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-earphone"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-earphone</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-phone-alt"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-phone-alt</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-tower"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-tower</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-stats"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-stats</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sd-video"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sd-video</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-hd-video"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-hd-video</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-subtitles"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-subtitles</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sound-stereo"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sound-stereo</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sound-dolby"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sound-dolby</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sound-5-1"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sound-5-1</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sound-6-1"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sound-6-1</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sound-7-1"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sound-7-1</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-copyright-mark"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-copyright-mark</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-registration-mark"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-registration-mark</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-cloud-download"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-cloud-download</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-cloud-upload"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-cloud-upload</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-tree-conifer"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-tree-conifer</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-tree-deciduous"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-tree-deciduous</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-cd"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-cd</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-save-file"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-save-file</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-open-file"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-open-file</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-level-up"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-level-up</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-copy"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-copy</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-paste"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-paste</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-alert"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-alert</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-equalizer"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-equalizer</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-king"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-king</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-queen"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-queen</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-pawn"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-pawn</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-bishop"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-bishop</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-knight"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-knight</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-baby-formula"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-baby-formula</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-tent"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-tent</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-blackboard"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-blackboard</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-bed"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-bed</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-apple"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-apple</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-erase"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-erase</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-hourglass"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-hourglass</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-lamp"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-lamp</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-duplicate"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-duplicate</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-piggy-bank"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-piggy-bank</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-scissors"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-scissors</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-bitcoin"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-bitcoin</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-btc"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-btc</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-xbt"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-xbt</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-yen"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-yen</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-jpy"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-jpy</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-ruble"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-ruble</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-rub"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-rub</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-scale"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-scale</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-ice-lolly"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-ice-lolly</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-ice-lolly-tasted"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-ice-lolly-tasted</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-education"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-education</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-option-horizontal"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-option-horizontal</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-option-vertical"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-option-vertical</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-menu-hamburger"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-menu-hamburger</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-modal-window"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-modal-window</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-oil"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-oil</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-grain"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-grain</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-sunglasses"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-sunglasses</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-text-size"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-text-size</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-text-color"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-text-color</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-text-background"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-text-background</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-object-align-top"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-object-align-top</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-object-align-bottom"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-object-align-bottom</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-object-align-horizontal"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-object-align-horizontal</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-object-align-left"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-object-align-left</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-object-align-vertical"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-object-align-vertical</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-object-align-right"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-object-align-right</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-triangle-right"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-triangle-right</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-triangle-left"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-triangle-left</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-triangle-bottom"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-triangle-bottom</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-triangle-top"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-triangle-top</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-console"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-console</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-superscript"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-superscript</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-subscript"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-subscript</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-menu-left"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-menu-left</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-menu-right"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-menu-right</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-menu-down"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-menu-down</span>\n' +
    '                  </li>\n' +
    '                  <li>\n' +
    '                    <span class="glyphicon glyphicon-menu-up"></span>\n' +
    '                    <span class="glyphicon-class">glyphicon glyphicon-menu-up</span>\n' +
    '                  </li>\n' +
    '                </ul>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </uib-tab>\n' +
    '      </uib-tabset>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/ui-modal/ui-modal.component.html',
    '<script type="text/ng-template" id="myModalContent.html">\n' +
    '  <div class="modal-header">\n' +
    '    <h3 class="modal-title">I\'m a modal!</h3>\n' +
    '  </div>\n' +
    '  <div class="modal-body">\n' +
    '    <ul>\n' +
    '      <li ng-repeat="item in mvm.items">\n' +
    '        <a href="#" ng-click="$event.preventDefault(); selected.item = item">{{ item }}</a>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '    <h4>Selected: <small><code>{{ selected.item }}</code></small></h4>\n' +
    '  </div>\n' +
    '  <div class="modal-footer">\n' +
    '    <button class="btn btn-primary" type="button" ng-click="mvm.ok()">OK</button>\n' +
    '    <button class="btn btn-warning" type="button" ng-click="mvm.cancel()">Cancel</button>\n' +
    '  </div>\n' +
    '</script>\n' +
    '<section class="content-header">\n' +
    '  <h1>\n' +
    '    Modals\n' +
    '    <small>new</small>\n' +
    '  </h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a href="#">UI</a></li>\n' +
    '    <li class="active">Modals</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="box box-default">\n' +
    '    <div class="box-header with-border">\n' +
    '      <i class="fa fa-clone"></i>\n' +
    '      <h3 class="box-title">Modals</h3>\n' +
    '    </div>\n' +
    '    <div class="box-body">\n' +
    '      <button type="button" class="btn btn-default" ng-click="vm.modalOpen()">Open me!</button>\n' +
    '      <button type="button" class="btn btn-default" ng-click="vm.modalOpen(\'lg\')">Large modal</button>\n' +
    '      <button type="button" class="btn btn-default" ng-click="vm.modalOpen(\'sm\')">Small modal</button>\n' +
    '      <button type="button" class="btn btn-default" ng-click="vm.toggleModalAnimation()">Toggle Animation ({{ vm.animationsEnabled }})</button>\n' +
    '      <div ng-show="selected"><h4>Selection from a modal: <small><code>{{ selected }}</code></small></h4></div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="box box-default">\n' +
    '    <div class="box-header with-border">\n' +
    '      <i class="fa fa-info-circle"></i>\n' +
    '      <h3 class="box-title">Sweet Alerts</h3>\n' +
    '    </div>\n' +
    '    <div class="box-body">\n' +
    '      <button type="button" class="btn btn-default" ng-click="vm.swalBasic()">Basic</button>\n' +
    '      <button type="button" class="btn btn-success" ng-click="vm.swalSuccess()">Success Message</button>\n' +
    '      <button type="button" class="btn btn-danger" ng-click="vm.swalConfirm()">Confirm</button>\n' +
    '      <button type="button" class="btn btn-primary" ng-click="vm.swalAjax()">AJAX</button>\n' +
    '      <button type="button" class="btn btn-info" ng-click="vm.swalDecide()">Decision</button>\n' +
    '      <button type="button" class="btn btn-info" ng-click="vm.swalImage()">Custom Image</button>\n' +
    '      <button type="button" class="btn btn-info" ng-click="vm.swalHtmlMessage()">HTML Message</button>\n' +
    '      <button type="button" class="btn btn-info" ng-click="vm.swalAutoClose()">Auto Close</button>\n' +
    '      <button type="button" class="btn btn-info" ng-click="vm.swalPrompt()">Prompt</button>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/ui-timeline/ui-timeline.component.html',
    '<section class="content-header">\n' +
    '  <h1>\n' +
    '    Timeline\n' +
    '    <small>example</small>\n' +
    '  </h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a href="#">UI</a></li>\n' +
    '    <li class="active">Timeline</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-12">\n' +
    '      <ul class="timeline">\n' +
    '        <li class="time-label">\n' +
    '          <span class="bg-red">\n' +
    '            10 Feb. 2014\n' +
    '          </span>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <i class="fa fa-envelope bg-blue"></i>\n' +
    '          <div class="timeline-item">\n' +
    '            <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>\n' +
    '            <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>\n' +
    '            <div class="timeline-body">\n' +
    '              Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...\n' +
    '            </div>\n' +
    '            <div class="timeline-footer">\n' +
    '              <a class="btn btn-primary btn-xs">Read more</a>\n' +
    '              <a class="btn btn-danger btn-xs">Delete</a>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <i class="fa fa-user bg-aqua"></i>\n' +
    '          <div class="timeline-item">\n' +
    '            <span class="time"><i class="fa fa-clock-o"></i> 5 mins ago</span>\n' +
    '            <h3 class="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request</h3>\n' +
    '          </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <i class="fa fa-comments bg-yellow"></i>\n' +
    '          <div class="timeline-item">\n' +
    '            <span class="time"><i class="fa fa-clock-o"></i> 27 mins ago</span>\n' +
    '            <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>\n' +
    '            <div class="timeline-body">\n' +
    '              Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!\n' +
    '            </div>\n' +
    '            <div class="timeline-footer">\n' +
    '              <a class="btn btn-warning btn-flat btn-xs">View comment</a>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </li>\n' +
    '        <li class="time-label">\n' +
    '          <span class="bg-green">\n' +
    '            3 Jan. 2014\n' +
    '          </span>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <i class="fa fa-camera bg-purple"></i>\n' +
    '          <div class="timeline-item">\n' +
    '            <span class="time"><i class="fa fa-clock-o"></i> 2 days ago</span>\n' +
    '            <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>\n' +
    '            <div class="timeline-body">\n' +
    '              <img src="http://placehold.it/150x100" alt="..." class="margin">\n' +
    '              <img src="http://placehold.it/150x100" alt="..." class="margin">\n' +
    '              <img src="http://placehold.it/150x100" alt="..." class="margin">\n' +
    '              <img src="http://placehold.it/150x100" alt="..." class="margin">\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <i class="fa fa-video-camera bg-maroon"></i>\n' +
    '          <div class="timeline-item">\n' +
    '            <span class="time"><i class="fa fa-clock-o"></i> 5 days ago</span>\n' +
    '            <h3 class="timeline-header"><a href="#">Mr. Doe</a> shared a video</h3>\n' +
    '            <div class="timeline-body">\n' +
    '              <div class="embed-responsive embed-responsive-16by9">\n' +
    '                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tMWkeBIohBs" frameborder="0" allowfullscreen></iframe>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="timeline-footer">\n' +
    '              <a href="#" class="btn btn-xs bg-maroon">See comments</a>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <i class="fa fa-clock-o bg-gray"></i>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row" style="margin-top: 10px;">\n' +
    '    <div class="col-md-12">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title"><i class="fa fa-code"></i> Timeline Markup</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <pre style="font-weight: 600;">\n' +
    '&lt;ul class="timeline">\n' +
    '\n' +
    '    &lt;!-- timeline time label -->\n' +
    '    &lt;li class="time-label">\n' +
    '        &lt;span class="bg-red">\n' +
    '            10 Feb. 2014\n' +
    '        &lt;/span>\n' +
    '    &lt;/li>\n' +
    '    &lt;!-- /.timeline-label -->\n' +
    '\n' +
    '    &lt;!-- timeline item -->\n' +
    '    &lt;li>\n' +
    '        &lt;!-- timeline icon -->\n' +
    '        &lt;i class="fa fa-envelope bg-blue">&lt;/i>\n' +
    '        &lt;div class="timeline-item">\n' +
    '            &lt;span class="time">&lt;i class="fa fa-clock-o">&lt;/i> 12:05&lt;/span>\n' +
    '\n' +
    '            &lt;h3 class="timeline-header">&lt;a href="#">Support Team&lt;/a> ...&lt;/h3>\n' +
    '\n' +
    '            &lt;div class="timeline-body">\n' +
    '                ...\n' +
    '                Content goes here\n' +
    '            &lt;/div>\n' +
    '\n' +
    '            &lt;div class="timeline-footer">\n' +
    '                &lt;a class="btn btn-primary btn-xs">...&lt;/a>\n' +
    '            &lt;/div>\n' +
    '        &lt;/div>\n' +
    '    &lt;/li>\n' +
    '    &lt;!-- END timeline item -->\n' +
    '\n' +
    '    ...\n' +
    '\n' +
    '&lt;/ul>\n' +
    '                  </pre>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-edit/user-edit.component.html',
    '<section class="content-header">\n' +
    '  <h1>Users <small>Module description here</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a ui-sref="app.userlist">User Lists</a></li>\n' +
    '    <li class="active">Edit User</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Edit User</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="userForm" ng-submit="vm.save(userForm.$valid)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.name.$invalid && ( vm.formSubmitted || userForm.name.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Name</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.usereditdata.data.name" name="name" placeholder="Name" required>\n' +
    '                <p ng-show="userForm.name.$error.required && ( vm.formSubmitted || userForm.name.$touched)" class="help-block">Name is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.email.$invalid && ( vm.formSubmitted || userForm.email.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="email" class="form-control" ng-model="vm.usereditdata.data.email" name="email" placeholder="Email" required>\n' +
    '                <p ng-show="userForm.email.$error.required && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">Email is required.</p>\n' +
    '                <p ng-show="userForm.email.$error.email  && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">This is not a valid email.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Roles</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <div class="checkbox" ng-repeat="role in vm.systemRoles">\n' +
    '                  <label>\n' +
    '                    <input type="checkbox" checklist-model="vm.usereditdata.data.role" checklist-value="role.id"> {{role.name}}\n' +
    '                  </label>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userlist" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Update</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-lists/user-lists.component.html',
    '<section class="content-header">\n' +
    '  <h1>Users <small>Module description here</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li class="active">User Lists</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-12">\n' +
    '      <div class="box box-info">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">User List</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <table datatable="" width="100%" class="table table-striped table-bordered" ng-if="vm.displayTable" dt-options="vm.dtOptions" dt-columns="vm.dtColumns"></table>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-permissions/user-permissions.component.html',
    '<section class="content-header">\n' +
    '  <h1>User Permissions <small>Module description here</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li class="active">Permission Lists</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="box">\n' +
    '    <div class="box-header with-border">\n' +
    '      <h3 class="box-title">Permission Lists</h3>\n' +
    '      <div class="box-tools pull-right">\n' +
    '        <a ui-sref="app.userpermissionsadd" class="btn btn-block btn-success btn-xs"><i class="fa fa-plus"></i> Add New</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="box-body">\n' +
    '      <table datatable="" width="100%" class="table table-striped table-bordered" ng-if="vm.displayTable" dt-options="vm.dtOptions" dt-columns="vm.dtColumns"></table>\n' +
    '    </div>\n' +
    '    <div class="box-footer">\n' +
    '      Footer\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-permissions-add/user-permissions-add.component.html',
    '<section class="content-header">\n' +
    '  <h1>Users <small>Module description here</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a ui-sref="app.userpermissions">Permission Lists</a></li>\n' +
    '    <li class="active">Add New User Permission</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Add New User Permission</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="permissionForm" ng-submit="vm.save(permissionForm.$valid, permissionForm)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': permissionForm.name.$invalid && ( vm.formSubmitted || permissionForm.name.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Name</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.name" name="name" placeholder="Name" required>\n' +
    '                <p ng-show="permissionForm.name.$error.required && ( vm.formSubmitted || permissionForm.name.$touched)" class="help-block">Name is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': permissionForm.slug.$invalid && ( vm.formSubmitted || permissionForm.slug.$touched) }">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Slug</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.slug" name="slug" placeholder="Slug" required>\n' +
    '                <p ng-show="permissionForm.slug.$error.required && ( vm.formSubmitted || permissionForm.slug.$touched)" class="help-block">Slug is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Description</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <textarea class="form-control" rows="3" ng-model="vm.description" name="description" placeholder="Description"></textarea>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userpermissions" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Add New</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-permissions-edit/user-permissions-edit.component.html',
    '<section class="content-header">\n' +
    '  <h1>Users <small>Module description here</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a ui-sref="app.userpermissions">Permission Lists</a></li>\n' +
    '    <li class="active">Edit User Permission</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Edit User Permission</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="permissionForm" ng-submit="vm.save(permissionForm.$valid)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': permissionForm.permission.$invalid && ( vm.formSubmitted || permissionForm.permission.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Name</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.permission.data.name" name="permission" placeholder="Name" required>\n' +
    '                <p ng-show="permissionForm.permission.$error.required && ( vm.formSubmitted || permissionForm.permission.$touched)" class="help-block">Name is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': permissionForm.slug.$invalid && ( vm.formSubmitted || permissionForm.slug.$touched) }">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Slug</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.permission.data.slug" name="slug" placeholder="Slug" required>\n' +
    '                <p ng-show="permissionForm.slug.$error.required && ( vm.formSubmitted || permissionForm.slug.$touched)" class="help-block">Slug is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Description</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <textarea class="form-control" rows="3" ng-model="vm.permission.data.description" name="description" placeholder="Description"></textarea>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userpermissions" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Update</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-profile/user-profile.component.html',
    '<section class="content-header">\n' +
    '  <h1>Users <small>Module description here</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a ui-sref="app.userlist">User Lists</a></li>\n' +
    '    <li class="active">Edit User</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Profile</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="userForm" ng-submit="vm.save(userForm.$valid, userForm)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.name.$invalid && ( vm.formSubmitted || userForm.name.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">Name</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="text" class="form-control" ng-model="vm.userdata.data.name" name="name" placeholder="Name" required>\n' +
    '                <p ng-show="userForm.name.$error.required && ( vm.formSubmitted || userForm.name.$touched)" class="help-block">Name is required.</p>\n' +
    '                <p ng-show="userForm.name.customError" class="help-block">{{userForm.name.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.email.$invalid && ( vm.formSubmitted || userForm.email.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">Email</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="email" class="form-control" ng-model="vm.userdata.data.email" name="email" placeholder="Email" required>\n' +
    '                <p ng-show="userForm.email.$error.required && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">Email is required.</p>\n' +
    '                <p ng-show="userForm.email.$error.email  && ( vm.formSubmitted || userForm.email.$touched)" class="help-block">This is not a valid email.</p>\n' +
    '                <p ng-show="userForm.email.customError" class="help-block">{{userForm.email.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="page-header">\n' +
    '              <h4>Update Password <small>( Optional )</small></h4>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.current_password.$invalid && ( vm.formSubmitted || userForm.current_password.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">Current Password</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="password" class="form-control" placeholder="Password" name="current_password" ng-model="vm.userdata.data.current_password" ng-minlength="8" ng-maxlength="50" ng-required="vm.userdata.data.new_password">\n' +
    '                <p ng-show="userForm.current_password.$error.required && ( vm.formSubmitted || userForm.current_password.$touched)" class="help-block">Password is required.</p>\n' +
    '                <p ng-show="userForm.current_password.$error.maxlength" class="help-block">Password is too long.</p>\n' +
    '                <p ng-show="userForm.current_password.$invalid &&\n' +
    '                            userForm.current_password.$error.minlength &&\n' +
    '                            userForm.current_password.$touched" class="help-block">Password is too short, Please enter more than 8 characters.</p>\n' +
    '                <p ng-show="userForm.current_password.$invalid && (vm.formSubmitted || vm.errors.current_password)" class="help-block">{{vm.errors.current_password}}</p>\n' +
    '                <p ng-show="userForm.current_password.customError" class="help-block">{{userForm.current_password.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.new_password.$invalid && ( vm.formSubmitted || userForm.new_password.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">New Password</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="password" class="form-control" placeholder="Password" name="new_password" ng-model="vm.userdata.data.new_password" ng-minlength="8" ng-maxlength="50" ng-required="vm.userdata.data.current_password">\n' +
    '                <p ng-show="userForm.new_password.$error.required && ( vm.formSubmitted || userForm.new_password.$touched)" class="help-block">New Password is required.</p>\n' +
    '                <p ng-show="userForm.new_password.$error.maxlength" class="help-block">Password is too long.</p>\n' +
    '                <p ng-show="userForm.new_password.$invalid &&\n' +
    '                            userForm.new_password.$error.minlength &&\n' +
    '                            userForm.new_password.$touched" class="help-block">Password is too short, Please enter more than 8 characters.</p>\n' +
    '                <p ng-show="userForm.new_password.$invalid && (vm.formSubmitted || vm.errors.new_password)" class="help-block">{{vm.errors.new_password}}</p>\n' +
    '                <p ng-show="userForm.new_password.customError" class="help-block">{{userForm.new_password.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': userForm.new_password_confirmation.$invalid && ( vm.formSubmitted || userForm.new_password_confirmation.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-3 control-label">Confirm Password</label>\n' +
    '              <div class="col-sm-9">\n' +
    '                <input type="password" class="form-control" placeholder="Password" name="new_password_confirmation" ng-model="vm.userdata.data.new_password_confirmation" ng-minlength="8" ng-maxlength="50" ng-required="vm.userdata.data.current_password" password-verify="vm.userdata.data.new_password">\n' +
    '                <p ng-show="userForm.new_password_confirmation.$error.required &&\n' +
    '                            ( vm.formSubmitted || userForm.new_password_confirmation.$touched)" class="help-block">Confirm Password is required.</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.$error.maxlength" class="help-block">Password is too long.</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.$invalid &&\n' +
    '                            userForm.new_password_confirmation.$error.minlength &&\n' +
    '                            userForm.new_password_confirmation.$touched" class="help-block">Password is too short, Please enter more than 8 characters.</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.$invalid && (vm.formSubmitted || vm.errors.new_password_confirmation)" class="help-block">{{vm.errors.new_password_confirmation}}</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.$error.passwordVerify && (vm.formSubmitted || userForm.new_password_confirmation.$touched)" class="help-block">Password Mismatch</p>\n' +
    '                <p ng-show="userForm.new_password_confirmation.customError" class="help-block">{{userForm.new_password.customError}}</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userlist" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Update</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-roles/user-roles.component.html',
    '<section class="content-header">\n' +
    '  <h1>User Roles <small>Module description here</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li class="active">Role List</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="box">\n' +
    '    <div class="box-header with-border">\n' +
    '      <h3 class="box-title">Role List</h3>\n' +
    '      <div class="box-tools pull-right">\n' +
    '        <a ui-sref="app.userrolesadd" class="btn btn-block btn-success btn-xs"><i class="fa fa-plus"></i> Add New</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="box-body">\n' +
    '      <table datatable="" width="100%" class="table table-striped table-bordered" ng-if="vm.displayTable" dt-options="vm.dtOptions" dt-columns="vm.dtColumns"></table>\n' +
    '    </div>\n' +
    '    <div class="box-footer">\n' +
    '      Footer\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-roles-add/user-roles-add.component.html',
    '<section class="content-header">\n' +
    '  <h1>Users Roles<small>Module description here</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a ui-sref="app.userroles">Role Lists</a></li>\n' +
    '    <li class="active">Add User Role</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Add User Role</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="roleForm" ng-submit="vm.save(roleForm.$valid, roleForm)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': roleForm.role.$invalid && ( vm.formSubmitted || roleForm.role.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Role</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.role" name="role" placeholder="Role" required>\n' +
    '                <p ng-show="roleForm.role.$error.required && ( vm.formSubmitted || roleForm.role.$touched)" class="help-block">Role is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': roleForm.slug.$invalid && ( vm.formSubmitted || roleForm.slug.$touched) }">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Slug</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.slug" name="slug" placeholder="Slug" required>\n' +
    '                <p ng-show="roleForm.slug.$error.required && ( vm.formSubmitted || roleForm.slug.$touched)" class="help-block">Slug is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Description</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <textarea class="form-control" rows="3" ng-model="vm.description" name="description" placeholder="Description"></textarea>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userroles" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Add New</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-roles-edit/user-roles-edit.component.html',
    '<section class="content-header">\n' +
    '  <h1>Users Roles<small>Module description here</small></h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a ui-sref="app.landing"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li><a ui-sref="app.userroles">Role Lists</a></li>\n' +
    '    <li class="active">Edit User Role</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-sm-12 col-md-7">\n' +
    '      <div class="box box-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Edit User Role</h3>\n' +
    '        </div>\n' +
    '        <form class="form-horizontal" name="roleForm" ng-submit="vm.save(roleForm.$valid)" novalidate>\n' +
    '          <div class="box-body">\n' +
    '            <div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '              <h4>{{alert.title}}</h4>\n' +
    '              <p>{{alert.msg}}</p>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': roleForm.role.$invalid && ( vm.formSubmitted || roleForm.role.$touched) }">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Role</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.role.data.name" name="role" placeholder="Role" required>\n' +
    '                <p ng-show="roleForm.role.$error.required && ( vm.formSubmitted || roleForm.role.$touched)" class="help-block">Role is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group" ng-class="{ \'has-error\': roleForm.slug.$invalid && ( vm.formSubmitted || roleForm.slug.$touched) }">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Slug</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" ng-model="vm.role.data.slug" name="slug" placeholder="Slug" required>\n' +
    '                <p ng-show="roleForm.slug.$error.required && ( vm.formSubmitted || roleForm.slug.$touched)" class="help-block">Slug is required.</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputPassword3" class="col-sm-2 control-label">Description</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <textarea class="form-control" rows="3" ng-model="vm.role.data.description" name="description" placeholder="Description"></textarea>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="form-group">\n' +
    '              <label for="inputEmail3" class="col-sm-2 control-label">Permission</label>\n' +
    '              <div class="col-sm-10">\n' +
    '                <div class="checkbox" ng-repeat="permission in vm.systemPermissions">\n' +
    '                  <label>\n' +
    '                    <input type="checkbox" checklist-model="vm.role.data.permissions" checklist-value="permission.id"> {{permission.name}}\n' +
    '                  </label>\n' +
    '                </div>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-footer">\n' +
    '            <a ui-sref="app.userroles" class="btn btn-default"><i class="fa fa-angle-double-left"></i> Back</a>\n' +
    '            <button type="submit" class="btn btn-primary pull-right">Update</button>\n' +
    '          </div>\n' +
    '        </form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/user-verification/user-verification.component.html',
    '<div ng-if="vm.alerts" class="alert alert-{{alert.type}}" ng-repeat="alert in vm.alerts">\n' +
    '  <h4>{{alert.title}}</h4>\n' +
    '  <p>{{alert.msg}}</p>\n' +
    '</div>\n' +
    '<a ui-sref="login" class="btn btn-default">Login Page</a>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/components/widgets/widgets.component.html',
    '<section class="content-header">\n' +
    '  <h1>\n' +
    '    Widgets\n' +
    '    <small>Preview page</small>\n' +
    '  </h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li class="active">Widgets</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<section class="content">\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-aqua"><i class="fa fa-envelope-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Messages</span>\n' +
    '          <span class="info-box-number">1,410</span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-green"><i class="fa fa-flag-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Bookmarks</span>\n' +
    '          <span class="info-box-number">410</span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-yellow"><i class="fa fa-files-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Uploads</span>\n' +
    '          <span class="info-box-number">13,648</span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box">\n' +
    '        <span class="info-box-icon bg-red"><i class="fa fa-star-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Likes</span>\n' +
    '          <span class="info-box-number">93,139</span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box bg-aqua">\n' +
    '        <span class="info-box-icon"><i class="fa fa-bookmark-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Bookmarks</span>\n' +
    '          <span class="info-box-number">41,410</span>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 70%"></div>\n' +
    '          </div>\n' +
    '          <span class="progress-description">\n' +
    '            70% Increase in 30 Days\n' +
    '          </span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box bg-green">\n' +
    '        <span class="info-box-icon"><i class="fa fa-thumbs-o-up"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Likes</span>\n' +
    '          <span class="info-box-number">41,410</span>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 70%"></div>\n' +
    '          </div>\n' +
    '          <span class="progress-description">\n' +
    '            70% Increase in 30 Days\n' +
    '          </span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box bg-yellow">\n' +
    '        <span class="info-box-icon"><i class="fa fa-calendar"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Events</span>\n' +
    '          <span class="info-box-number">41,410</span>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 70%"></div>\n' +
    '          </div>\n' +
    '          <span class="progress-description">\n' +
    '            70% Increase in 30 Days\n' +
    '          </span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3 col-sm-6 col-xs-12">\n' +
    '      <div class="info-box bg-red">\n' +
    '        <span class="info-box-icon"><i class="fa fa-comments-o"></i></span>\n' +
    '        <div class="info-box-content">\n' +
    '          <span class="info-box-text">Comments</span>\n' +
    '          <span class="info-box-number">41,410</span>\n' +
    '          <div class="progress">\n' +
    '            <div class="progress-bar" style="width: 70%"></div>\n' +
    '          </div>\n' +
    '          <span class="progress-description">\n' +
    '            70% Increase in 30 Days\n' +
    '          </span>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-lg-3 col-xs-6">\n' +
    '      <div class="small-box bg-aqua">\n' +
    '        <div class="inner">\n' +
    '          <h3>150</h3>\n' +
    '          <p>New Orders</p>\n' +
    '        </div>\n' +
    '        <div class="icon">\n' +
    '          <i class="fa fa-shopping-cart"></i>\n' +
    '        </div>\n' +
    '        <a href="#" class="small-box-footer">\n' +
    '          More info <i class="fa fa-arrow-circle-right"></i>\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-lg-3 col-xs-6">\n' +
    '      <div class="small-box bg-green">\n' +
    '        <div class="inner">\n' +
    '          <h3>53<sup style="font-size: 20px">%</sup></h3>\n' +
    '          <p>Bounce Rate</p>\n' +
    '        </div>\n' +
    '        <div class="icon">\n' +
    '          <i class="ion ion-stats-bars"></i>\n' +
    '        </div>\n' +
    '        <a href="#" class="small-box-footer">\n' +
    '          More info <i class="fa fa-arrow-circle-right"></i>\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-lg-3 col-xs-6">\n' +
    '      <div class="small-box bg-yellow">\n' +
    '        <div class="inner">\n' +
    '          <h3>44</h3>\n' +
    '          <p>User Registrations</p>\n' +
    '        </div>\n' +
    '        <div class="icon">\n' +
    '          <i class="ion ion-person-add"></i>\n' +
    '        </div>\n' +
    '        <a href="#" class="small-box-footer">\n' +
    '          More info <i class="fa fa-arrow-circle-right"></i>\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-lg-3 col-xs-6">\n' +
    '      <div class="small-box bg-red">\n' +
    '        <div class="inner">\n' +
    '          <h3>65</h3>\n' +
    '          <p>Unique Visitors</p>\n' +
    '        </div>\n' +
    '        <div class="icon">\n' +
    '          <i class="ion ion-pie-graph"></i>\n' +
    '        </div>\n' +
    '        <a href="#" class="small-box-footer">\n' +
    '          More info <i class="fa fa-arrow-circle-right"></i>\n' +
    '        </a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-default collapsed-box">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Expandable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-success">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Removable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-warning">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Collapsable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-danger">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Loading state</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <div class="overlay">\n' +
    '          <i class="fa fa-refresh fa-spin"></i>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-default collapsed-box box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Expandable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-plus"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-success box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Removable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-warning box-solid">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Collapsable</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-danger box-solid">\n' +
    '        <div class="box-header">\n' +
    '          <h3 class="box-title">Loading state</h3>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          The body of the box\n' +
    '        </div>\n' +
    '        <div class="overlay">\n' +
    '          <i class="fa fa-refresh fa-spin"></i>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-primary direct-chat direct-chat-primary">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Direct Chat</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <span data-toggle="tooltip" title="3 New Messages" class="badge bg-light-blue">3</span>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\n' +
    '              <i class="fa fa-comments"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="direct-chat-messages">\n' +
    '            <div class="direct-chat-msg">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n' +
    '              </div>\n' +
    '              <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="Message User Image">\n' +
    '              <div class="direct-chat-text">\n' +
    '                Is this template really for free? That\'s unbelievable!\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="direct-chat-msg right">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\n' +
    '              </div>\n' +
    '              <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="Message User Image">\n' +
    '              <div class="direct-chat-text">\n' +
    '                You better believe it!\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="direct-chat-contacts">\n' +
    '            <ul class="contacts-list">\n' +
    '              <li>\n' +
    '                <a href="#">\n' +
    '                  <img class="contacts-list-img" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '                  <div class="contacts-list-info">\n' +
    '                    <span class="contacts-list-name">\n' +
    '                      Count Dracula\n' +
    '                      <small class="contacts-list-date pull-right">2/28/2015</small>\n' +
    '                    </span>\n' +
    '                    <span class="contacts-list-msg">How have you been? I was...</span>\n' +
    '                  </div>\n' +
    '                </a>\n' +
    '              </li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <div class="input-group">\n' +
    '              <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n' +
    '              <span class="input-group-btn">\n' +
    '                <button type="submit" class="btn btn-primary btn-flat">Send</button>\n' +
    '              </span>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-success direct-chat direct-chat-success">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Direct Chat</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <span data-toggle="tooltip" title="3 New Messages" class="badge bg-green">3</span>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\n' +
    '              <i class="fa fa-comments"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="direct-chat-messages">\n' +
    '            <div class="direct-chat-msg">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n' +
    '              </div>\n' +
    '              <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="Message User Image">\n' +
    '              <div class="direct-chat-text">\n' +
    '                Is this template really for free? That\'s unbelievable!\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="direct-chat-msg right">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\n' +
    '              </div>\n' +
    '              <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="Message User Image">\n' +
    '              <div class="direct-chat-text">\n' +
    '                You better believe it!\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="direct-chat-contacts">\n' +
    '            <ul class="contacts-list">\n' +
    '              <li>\n' +
    '                <a href="#">\n' +
    '                  <img class="contacts-list-img" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '                  <div class="contacts-list-info">\n' +
    '                    <span class="contacts-list-name">\n' +
    '                      Count Dracula\n' +
    '                      <small class="contacts-list-date pull-right">2/28/2015</small>\n' +
    '                    </span>\n' +
    '                    <span class="contacts-list-msg">How have you been? I was...</span>\n' +
    '                  </div>\n' +
    '                </a>\n' +
    '              </li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <div class="input-group">\n' +
    '              <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n' +
    '              <span class="input-group-btn">\n' +
    '                <button type="submit" class="btn btn-success btn-flat">Send</button>\n' +
    '              </span>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-warning direct-chat direct-chat-warning">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Direct Chat</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <span data-toggle="tooltip" title="3 New Messages" class="badge bg-yellow">3</span>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\n' +
    '              <i class="fa fa-comments"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="direct-chat-messages">\n' +
    '            <div class="direct-chat-msg">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n' +
    '              </div>\n' +
    '              <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="Message User Image">\n' +
    '              <div class="direct-chat-text">\n' +
    '                Is this template really for free? That\'s unbelievable!\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="direct-chat-msg right">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\n' +
    '              </div>\n' +
    '              <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="Message User Image">\n' +
    '              <div class="direct-chat-text">\n' +
    '                You better believe it!\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="direct-chat-contacts">\n' +
    '            <ul class="contacts-list">\n' +
    '              <li>\n' +
    '                <a href="#">\n' +
    '                  <img class="contacts-list-img" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '                  <div class="contacts-list-info">\n' +
    '                    <span class="contacts-list-name">\n' +
    '                      Count Dracula\n' +
    '                      <small class="contacts-list-date pull-right">2/28/2015</small>\n' +
    '                    </span>\n' +
    '                    <span class="contacts-list-msg">How have you been? I was...</span>\n' +
    '                  </div>\n' +
    '                </a>\n' +
    '              </li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <div class="input-group">\n' +
    '              <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n' +
    '              <span class="input-group-btn">\n' +
    '                <button type="submit" class="btn btn-warning btn-flat">Send</button>\n' +
    '              </span>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-3">\n' +
    '      <div class="box box-danger direct-chat direct-chat-danger">\n' +
    '        <div class="box-header with-border">\n' +
    '          <h3 class="box-title">Direct Chat</h3>\n' +
    '          <div class="box-tools pull-right">\n' +
    '            <span data-toggle="tooltip" title="3 New Messages" class="badge bg-red">3</span>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">\n' +
    '              <i class="fa fa-comments"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <div class="direct-chat-messages">\n' +
    '            <div class="direct-chat-msg">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-left">Alexander Pierce</span>\n' +
    '                <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>\n' +
    '              </div>\n' +
    '              <img class="direct-chat-img" src="/img/user1-128x128.jpg" alt="Message User Image">\n' +
    '              <div class="direct-chat-text">\n' +
    '                Is this template really for free? That\'s unbelievable!\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="direct-chat-msg right">\n' +
    '              <div class="direct-chat-info clearfix">\n' +
    '                <span class="direct-chat-name pull-right">Sarah Bullock</span>\n' +
    '                <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>\n' +
    '              </div>\n' +
    '              <img class="direct-chat-img" src="/img/user3-128x128.jpg" alt="Message User Image">\n' +
    '              <div class="direct-chat-text">\n' +
    '                You better believe it!\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="direct-chat-contacts">\n' +
    '            <ul class="contacts-list">\n' +
    '              <li>\n' +
    '                <a href="#">\n' +
    '                  <img class="contacts-list-img" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '                  <div class="contacts-list-info">\n' +
    '                    <span class="contacts-list-name">\n' +
    '                      Count Dracula\n' +
    '                      <small class="contacts-list-date pull-right">2/28/2015</small>\n' +
    '                    </span>\n' +
    '                    <span class="contacts-list-msg">How have you been? I was...</span>\n' +
    '                  </div>\n' +
    '                </a>\n' +
    '              </li>\n' +
    '            </ul>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <div class="input-group">\n' +
    '              <input type="text" name="message" placeholder="Type Message ..." class="form-control">\n' +
    '              <span class="input-group-btn">\n' +
    '                <button type="submit" class="btn btn-danger btn-flat">Send</button>\n' +
    '              </span>\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <h2 class="page-header">Social Widgets</h2>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-4">\n' +
    '      <div class="box box-widget widget-user-2">\n' +
    '        <div class="widget-user-header bg-yellow">\n' +
    '          <div class="widget-user-image">\n' +
    '            <img class="img-circle" src="/img/user7-128x128.jpg" alt="User Avatar">\n' +
    '          </div>\n' +
    '          <h3 class="widget-user-username">Nadia Carmichael</h3>\n' +
    '          <h5 class="widget-user-desc">Lead Developer</h5>\n' +
    '        </div>\n' +
    '        <div class="box-footer no-padding">\n' +
    '          <ul class="nav nav-stacked">\n' +
    '            <li><a href="#">Projects <span class="pull-right badge bg-blue">31</span></a></li>\n' +
    '            <li><a href="#">Tasks <span class="pull-right badge bg-aqua">5</span></a></li>\n' +
    '            <li><a href="#">Completed Projects <span class="pull-right badge bg-green">12</span></a></li>\n' +
    '            <li><a href="#">Followers <span class="pull-right badge bg-red">842</span></a></li>\n' +
    '          </ul>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-4">\n' +
    '      <div class="box box-widget widget-user">\n' +
    '        <div class="widget-user-header bg-aqua-active">\n' +
    '          <h3 class="widget-user-username">Alexander Pierce</h3>\n' +
    '          <h5 class="widget-user-desc">Founder &amp; CEO</h5>\n' +
    '        </div>\n' +
    '        <div class="widget-user-image">\n' +
    '          <img class="img-circle" src="/img/user1-128x128.jpg" alt="User Avatar">\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <div class="row">\n' +
    '            <div class="col-sm-4 border-right">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">3,200</h5>\n' +
    '                <span class="description-text">SALES</span>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="col-sm-4 border-right">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">13,000</h5>\n' +
    '                <span class="description-text">FOLLOWERS</span>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="col-sm-4">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">35</h5>\n' +
    '                <span class="description-text">PRODUCTS</span>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-4">\n' +
    '      <div class="box box-widget widget-user">\n' +
    '        <div class="widget-user-header bg-black" style="background: url(\'/img/photo1.png\') center center;">\n' +
    '          <h3 class="widget-user-username">Elizabeth Pierce</h3>\n' +
    '          <h5 class="widget-user-desc">Web Designer</h5>\n' +
    '        </div>\n' +
    '        <div class="widget-user-image">\n' +
    '          <img class="img-circle" src="/img/user3-128x128.jpg" alt="User Avatar">\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <div class="row">\n' +
    '            <div class="col-sm-4 border-right">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">3,200</h5>\n' +
    '                <span class="description-text">SALES</span>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="col-sm-4 border-right">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">13,000</h5>\n' +
    '                <span class="description-text">FOLLOWERS</span>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '            <div class="col-sm-4">\n' +
    '              <div class="description-block">\n' +
    '                <h5 class="description-header">35</h5>\n' +
    '                <span class="description-text">PRODUCTS</span>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-widget">\n' +
    '        <div class="box-header with-border">\n' +
    '          <div class="user-block">\n' +
    '            <img class="img-circle" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '            <span class="username"><a href="#">Jonathan Burke Jr.</a></span>\n' +
    '            <span class="description">Shared publicly - 7:30 PM Today</span>\n' +
    '          </div>\n' +
    '          <div class="box-tools">\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">\n' +
    '              <i class="fa fa-circle-o"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <img class="img-responsive pad" src="/img/photo2.png" alt="Photo">\n' +
    '          <p>I took this photo this morning. What do you guys think?</p>\n' +
    '          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-share"></i> Share</button>\n' +
    '          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-thumbs-o-up"></i> Like</button>\n' +
    '          <span class="pull-right text-muted">127 likes - 3 comments</span>\n' +
    '        </div>\n' +
    '        <div class="box-footer box-comments">\n' +
    '          <div class="box-comment">\n' +
    '            <img class="img-circle img-sm" src="/img/user3-128x128.jpg" alt="User Image">\n' +
    '            <div class="comment-text">\n' +
    '              <span class="username">\n' +
    '                Maria Gonzales\n' +
    '                <span class="text-muted pull-right">8:03 PM Today</span>\n' +
    '              </span>\n' +
    '              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-comment">\n' +
    '            <img class="img-circle img-sm" src="/img/user4-128x128.jpg" alt="User Image">\n' +
    '            <div class="comment-text">\n' +
    '              <span class="username">\n' +
    '                Luna Stark\n' +
    '                <span class="text-muted pull-right">8:03 PM Today</span>\n' +
    '              </span>\n' +
    '              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <img class="img-responsive img-circle img-sm" src="/img/user4-128x128.jpg" alt="Alt Text">\n' +
    '            <div class="img-push">\n' +
    '              <input type="text" class="form-control input-sm" placeholder="Press enter to post comment">\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="col-md-6">\n' +
    '      <div class="box box-widget">\n' +
    '        <div class="box-header with-border">\n' +
    '          <div class="user-block">\n' +
    '            <img class="img-circle" src="/img/user1-128x128.jpg" alt="User Image">\n' +
    '            <span class="username"><a href="#">Jonathan Burke Jr.</a></span>\n' +
    '            <span class="description">Shared publicly - 7:30 PM Today</span>\n' +
    '          </div>\n' +
    '          <div class="box-tools">\n' +
    '            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Mark as read">\n' +
    '              <i class="fa fa-circle-o"></i></button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>\n' +
    '            </button>\n' +
    '            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-body">\n' +
    '          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at</p>\n' +
    '          <p>the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>\n' +
    '          <div class="attachment-block clearfix">\n' +
    '            <img class="attachment-img" src="/img/photo1.png" alt="Attachment Image">\n' +
    '            <div class="attachment-pushed">\n' +
    '              <h4 class="attachment-heading"><a href="http://www.lipsum.com/">Lorem ipsum text generator</a></h4>\n' +
    '              <div class="attachment-text">\n' +
    '                Description about the attachment can be placed here. Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-share"></i> Share</button>\n' +
    '          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-thumbs-o-up"></i> Like</button>\n' +
    '          <span class="pull-right text-muted">45 likes - 2 comments</span>\n' +
    '        </div>\n' +
    '        <div class="box-footer box-comments">\n' +
    '          <div class="box-comment">\n' +
    '            <img class="img-circle img-sm" src="/img/user3-128x128.jpg" alt="User Image">\n' +
    '            <div class="comment-text">\n' +
    '              <span class="username">\n' +
    '                Maria Gonzales\n' +
    '                <span class="text-muted pull-right">8:03 PM Today</span>\n' +
    '              </span>\n' +
    '              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n' +
    '            </div>\n' +
    '          </div>\n' +
    '          <div class="box-comment">\n' +
    '            <img class="img-circle img-sm" src="/img/user5-128x128.jpg" alt="User Image">\n' +
    '            <div class="comment-text">\n' +
    '              <span class="username">\n' +
    '                Nora Havisham\n' +
    '                <span class="text-muted pull-right">8:03 PM Today</span>\n' +
    '              </span>\n' +
    '              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '        <div class="box-footer">\n' +
    '          <form action="#" method="post">\n' +
    '            <img class="img-responsive img-circle img-sm" src="/img/user4-128x128.jpg" alt="Alt Text">\n' +
    '            <div class="img-push">\n' +
    '              <input type="text" class="form-control input-sm" placeholder="Press enter to post comment">\n' +
    '            </div>\n' +
    '          </form>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/footer/footer.page.html',
    '<footer class="main-footer">\n' +
    '  <div class="pull-right hidden-xs">\n' +
    '   \n' +
    '  </div>\n' +
    '  <strong>West Advanced Technologies<a href="http://www.wati.com/"> <br> Wati</a></strong>\n' +
    '</footer>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/forgot-password/forgot-password.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>California Emergency Services</b></a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <div class="text-center">\n' +
    '          <h3>Forgot your password?</h3>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <forgot-password></forgot-password>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <br>\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <a ui-sref="login">Back to Login Page</a>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/header/header.page.html',
    '<nav-header></nav-header>\n' +
    '<nav-sidebar></nav-sidebar>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/landing/landing.page.html',
    '<section class="content-header">\n' +
    '  <h1>\n' +
    '    Dashboard\n' +
    '  </h1>\n' +
    '  <ol class="breadcrumb">\n' +
    '    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\n' +
    '    <li class="active">Dashboard</li>\n' +
    '  </ol>\n' +
    '</section>\n' +
    '<dashboard></dashboard>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/layout/layout.page.html',
    '<div ui-view="header"></div>\n' +
    '<div class="content-wrapper">\n' +
    '    <div ui-view="main"></div>\n' +
    '</div>\n' +
    '<div ui-view="footer"></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login/login.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>California Emergency Services</b></a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <div class="text-center">\n' +
    '          <h3>Sign in</h3>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <login-form></login-form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/login-loader/login-loader.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>California Emergency Services</b></a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <login-loader></login-loader>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/register/register.page.html',
    '<div class="register-box">\n' +
    '  <div class="register-logo">\n' +
    '    <a ui-sref="login"><b>California Emergency Services</b></a>\n' +
    '  </div>\n' +
    '  <div class="register-box-body">\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <div class="text-center">\n' +
    '          <h3>Create a new account</h3>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <register-form></register-form>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <br>\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <div class="text-center">\n' +
    '          <a ui-sref="login">I already have an account</a>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <br>\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        By signing up, you agree to our <a href="#">Terms</a> and that you have read our <a href="#">Privacy Policy</a>.\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/reset-password/reset-password.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>California Emergency Services</b></a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <div class="row-">\n' +
    '      <div class="col-xs-12">\n' +
    '        <div class="text-center">\n' +
    '          <h3>Reset Password</h3>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <div class="col-xs-12">\n' +
    '        <reset-password></reset-password>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('app.partials');
} catch (e) {
  module = angular.module('app.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/app/pages/user-verification/user-verification.page.html',
    '<div class="login-box">\n' +
    '  <div class="login-logo">\n' +
    '    <a ui-sref="login"><b>Admin</b>LTE</a>\n' +
    '  </div>\n' +
    '  <div class="login-box-body">\n' +
    '    <user-verification></user-verification>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
