export const factoriesModule = angular.module('factories', [])
  .factory('Server', [
    '$resource',
    function ($resource) {
      return $resource('/servers/:id', { id: '@_id' }, {
        stop: {
          url: '/servers/:id/stop',
          method: 'get',
          isArray: false,
        },
        start: {
          url: '/servers/:id/start',
          method: 'get',
          isArray: false,
        },
        restart: {
          url: '/servers/:id/restart',
          method: 'get',
          isArray: false,
        }
      });
    }
  ])
  .factory("Group", [
    "$resource",
    function ($resource) {
      return $resource("/groups/:id", { id: "@_id" });
    },
  ])
  .factory('Task', [
    '$resource',
    function ($resource) {
      return $resource('/tasks/:id', { id: '@_id' }, {
        addRandom: {
          url: '/tasks/add-random',
          method: 'get',
          isArray: false,
        }
      });
    }
  ])
  .factory('Charts', [
    '$resource',
    function ($resource) {
      return $resource('/charts/aggregate/day-tasks', { param: '@param' }, {
        serverCharts: {
          url: '/charts/:serverId',
          method: 'get',
          isArray: false,
        }
      });
    }
  ])