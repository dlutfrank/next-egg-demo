/**
 * 前端代码本地调试接口
 * 默认规则, 增加前缀
 */

'use strice';

let departmentCount = 0;
let projectCount = 0;
let monitorCount = 0;
let actionCount = 0;
let ruleCount = 0;
const departmentList = [];
const projectList = [];
const monitorList = [];
const actionList = [];
const ruleObj = {};
const warnObj = {};
let departmentId = 1001;
let projectId = 3001;
let monitorId = 5001;
let actionId = 7001;
let ruleId = 8001;
let warnId = 9001;

module.exports = {
  'department/insert': {
    response: (req) => {
      departmentCount++;
      const data = req.body;
      data.id = (departmentId++);
      data.createTime = new Date().getTime();
      departmentList.push(data);
      return {
        retcode: 200,
        retdesc: '',
        data: {
          id: data.id,
        },
      };
    },
  },

  'department/update': {
    response: (req) => {
      const data = req.body;
      for (let i = 0, len = departmentList.length; i < len; i++) {
        if (data.id === departmentList[i].id) {
          departmentList[i] = data;
          break;
        }
      }
      return {
        retcode: 200,
        retdesc: 'success',
      };
    },
  },

  'department/query': {
    response: () => ({
      retcode: 200,
      retdesc: '',
      data: {
        count: departmentCount,
        list: departmentList,
      },
    }),
  },
  'department/remove': {
    response: (req) => {
      if (req && req.body) {
        const { id } = req.body;
        for (let i = 0, len = departmentList.length; i < len; i++) {
          if (id === departmentList[i].id) {
            departmentList.splice(i, 1);
            break;
          }
        }
      }
      return {
        retcode: 200,
        retdesc: 'delete success',
      };
    },
  },
  'project/insert': {
    response: (req) => {
      projectCount++;
      const data = req.body;
      data.id = (projectId++);
      data.createTime = new Date().getTime();
      projectList.push(data);
      return {
        retcode: 200,
        retdesc: '',
        data: {
          id: data.id,
        },
      };
    },
  },

  'project/update': {
    response: (req) => {
      const data = req.body;
      for (let i = 0, len = projectList.length; i < len; i++) {
        if (Number(data.id) === Number(projectList[i].id)) {
          projectList[i] = data;
          break;
        }
      }
      return {
        retcode: 200,
        retdesc: 'success',
      };
    },
  },

  'project/query': {
    response: () => ({
      retcode: 200,
      retdesc: '',
      data: {
        count: projectCount,
        list: projectList,
      },
    }),
  },
  'project/remove': {
    response: (req) => {
      if (req && req.body) {
        const { id } = req.body;
        for (let i = 0, len = projectList.length; i < len; i++) {
          if (id === projectList[i].id) {
            projectList.splice(i, 1);
            break;
          }
        }
      }
      return {
        retcode: 200,
        retdesc: 'delete success',
      };
    },
  },
  'monitor/insert': {
    response: (req) => {
      monitorCount++;
      const data = req.body;
      data.id = (monitorId++);
      data.createTime = new Date().getTime();
      monitorList.push(data);
      return {
        retcode: 200,
        retdesc: '',
        data: {
          id: data.id,
        },
      };
    },
  },

  'monitor/update': {
    response: (req) => {
      const data = req.body;
      for (let i = 0, len = monitorList.length; i < len; i++) {
        if (data.id === monitorList[i].id) {
          monitorList[i] = data;
          break;
        }
      }
      return {
        retcode: 200,
        retdesc: 'success',
      };
    },
  },

  'monitor/query': {
    response: () => ({
      retcode: 200,
      retdesc: '',
      data: {
        count: monitorCount,
        list: monitorList,
      },
    }),
  },
  'monitor/remove': {
    response: (req) => {
      if (req && req.body) {
        const { id } = req.body;
        for (let i = 0, len = monitorList.length; i < len; i++) {
          if (Number(id) === Number(monitorList[i].id)) {
            monitorList.splice(i, 1);
            ruleObj[id] = [];
            break;
          }
        }
      }
      return {
        retcode: 200,
        retdesc: 'delete success',
      };
    },
  },

  'rule/insert': {
    response: (req) => {
      ruleCount++;
      const data = req.body;
      data.id = (ruleId++);
      data.createTime = new Date().getTime();
      if (!Array.isArray(ruleObj[data.monitorId])) {
        ruleObj[data.monitorId] = [];
      }
      data.warnList = [];
      ruleObj[data.monitorId].push(data);
      return {
        retcode: 200,
        retdesc: '',
        data: {
          id: data.id,
        },
      };
    },
  },

  'rule/update': {
    response: (req) => {
      let ruleData = [];
      for (const arr of Object.values(ruleObj)) {
        const idx = arr.findIndex(item => item.id === req.body.id);
        if (idx !== -1) {
          arr.splice(idx, 1, req.body);
          ruleData = arr;
          break;
        }
      }
      return {
        retcode: 200,
        retdesc: 'success',
        data: {
          count: ruleCount,
          list: ruleData,
        },
      };
    },
  },

  'rule/query': {
    response: req => ({
      retcode: 200,
      retdesc: 'success',
      data: {
        count: ruleCount,
        list: ruleObj[req.body.monitorId] || [],
      },
    }),
  },
  'rule/remove': {
    response: (req) => {
      let ruleData = [];
      for (const arr of Object.values(ruleObj)) {
        const idx = arr.findIndex(item => item.id === req.body.id);
        if (idx !== -1) {
          arr.splice(idx, 1);
          ruleData = arr;
          break;
        }
      }
      return {
        retcode: 200,
        retdesc: 'success',
        data: {
          count: ruleCount,
          list: ruleData,
        },
      };
    },
  },
  'warn/update': {
    response: (req) => {
      const { data } = req.body;
      const dataObj = JSON.parse(data);
      if (!Array.isArray(warnObj[req.body.ruleId])) {
        warnObj[req.body.ruleId] = [];
      }
      for (const item of dataObj) {
        if (!item.id) {
          item.id = (warnId++);
          item.createTime = new Date().getTime();
          warnObj[req.body.ruleId].push(item);
        } else {
          const idx = warnObj[req.body.ruleId].findIndex(value => value.id === item.id);
          if (idx !== -1) {
            warnObj[req.body.ruleId][idx] = item;
          }
        }
      }
      for (const item of Object.values(ruleObj)) {
        const idx = item.findIndex(value => value.id === req.body.ruleId);
        if (idx !== -1) {
          item[idx].warnList = warnObj[req.body.ruleId];
          break;
        }
      }
      return {
        retcode: 200,
        retdesc: '',
      };
    },
  },

  'action/insert': {
    response: (req) => {
      actionCount++;
      const data = req.body;
      data.id = (actionId++);
      data.createTime = new Date().getTime();
      actionList.push(data);
      return {
        retcode: 200,
        retdesc: '',
        data: {
          id: data.id,
        },
      };
    },
  },

  'action/update': {
    response: (req) => {
      const data = req.body;
      for (let i = 0, len = actionList.length; i < len; i++) {
        if (Number(data.id) === Number(actionList[i].id)) {
          actionList[i] = data;
          break;
        }
      }
      return {
        retcode: 200,
        retdesc: 'success',
      };
    },
  },

  'action/query': {
    response: () => ({
      retcode: 200,
      retdesc: '',
      data: {
        count: actionCount,
        list: actionList,
      },
    }),
  },
  'action/remove': {
    response: (req) => {
      if (req && req.body) {
        const { id } = req.body;
        for (let i = 0, len = actionList.length; i < len; i++) {
          if (id === actionList[i].id) {
            actionList.splice(i, 1);
            break;
          }
        }
      }
      return {
        retcode: 200,
        retdesc: 'delete success',
      };
    },
  },
  'monitor/action': {
    retcode: 200,
    retdesc: 'success',
  },
  'status/query': {
    retcode: 200,
    data: {
      'list|10': [{
        id: '@id',
        monitorId: '@id',
        departmentId: '@id',
        'state|1-2': true,
      }],
    },
  },
  logout: {
    retcode: 200,
    retdesc: 'success',
  },
};

