{
  "id":158,
  "name":"migxcalendar_events",
  "formtabs":[
    {
      "MIGX_id":1,
      "caption":"Event",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":1,
          "field":"title",
          "caption":"Titel",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":2,
          "field":"startdate",
          "caption":"Start",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"date",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":3,
          "field":"enddate",
          "caption":"Ende",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"date",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        }
      ]
    }
  ],
  "contextmenus":"recall_remove_delete",
  "actionbuttons":"addItem||toggletrash||emptyThrash",
  "columnbuttons":"update",
  "filters":"[]",
  "extended":{
    "migx_add":"Add Event",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"migxcalendar_events",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "extrahandlers":"",
    "packageName":"migxcalendars",
    "classname":"migxCalendarEvents",
    "task":"",
    "getlistsort":"",
    "getlistsortdir":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"yes",
    "getlistwhere":"",
    "joins":"",
    "cmpmaincaption":"Events Manager",
    "cmptabcaption":"Events",
    "cmptabdescription":"Manage Events",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":1,
      "header":"ID",
      "dataIndex":"id",
      "width":10,
      "sortable":true,
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":2,
      "header":"Titel",
      "dataIndex":"title",
      "width":30,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderRowActions",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":3,
      "header":"Start",
      "dataIndex":"startdate",
      "width":20,
      "sortable":true,
      "show_in_grid":1,
      "renderer":"this.renderDate",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":5,
      "header":"Ende",
      "dataIndex":"enddate",
      "width":20,
      "sortable":true,
      "show_in_grid":1,
      "renderer":"this.renderDate",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":4,
      "header":"",
      "dataIndex":"deleted",
      "width":"",
      "sortable":"false",
      "show_in_grid":"0",
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    }
  ],
  "createdby":1,
  "createdon":"2014-02-15 21:18:42",
  "editedby":1,
  "editedon":"2014-02-15 21:31:06",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"2014-02-15 01:00:00",
  "publishedby":0
}