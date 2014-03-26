{
  "id":166,
  "name":"migxcalendar_dragdropdate",
  "formtabs":[
    {
      "MIGX_id":1,
      "caption":"[[%migxcal.this_date]]",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":5,
          "field":"Event_title",
          "caption":"[[%migxcal.title]] ([[%migxcal.date_container]])",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":1,
          "field":"startdate",
          "caption":"[[%migxcal.start]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"date",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":2,
          "field":"enddate",
          "caption":"[[%migxcal.end]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"date",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":4,
          "field":"title",
          "caption":"[[%migxcal.title]] ([[%migxcal.this_date]])",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":6,
          "field":"Event_repeating",
          "caption":"[[%migxcal.repeat_weekly]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"checkbox",
          "validation":"",
          "configs":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"yes==1",
          "default":""
        },
        {
          "MIGX_id":3,
          "field":"allday",
          "caption":"[[%migxcal.allday]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"[[%migxcal.inherited]]==2||[[%migxcal.yes]]==1||[[%migxcal.no]]==0",
          "default":""
        },
        {
          "MIGX_id":10,
          "field":"delete_date",
          "caption":"[[%migxcal.delete_date]]",
          "description":"This will remove this date completely",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"checkbox",
          "validation":"",
          "configs":"",
          "restrictive_condition":"[[+Event_repeating]]",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"yes==1",
          "default":""
        },
        {
          "MIGX_id":7,
          "field":"Event_repeating_old",
          "caption":"",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"hidden",
          "validation":"",
          "configs":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":8,
          "field":"old_startdate",
          "caption":"",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"hidden",
          "validation":"",
          "configs":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":9,
          "field":"Event_id",
          "caption":"",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"hidden",
          "validation":"",
          "configs":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        }
      ]
    },
    {
      "MIGX_id":3,
      "caption":"[[%migxcal.date_container]]",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":1,
          "field":"Event_allday",
          "caption":"[[%migxcal.allday]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"checkbox",
          "validation":"",
          "configs":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"[[%migxcal.yes]]==1",
          "default":""
        },
        {
          "MIGX_id":2,
          "field":"Event_categoryid",
          "caption":"[[%migxcal.category]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"@EVAL return 'Select Category!==||' . $modx->runSnippet('migxLoopCollection',array('packageName'=>'migxcalendars','classname'=>'migxCalendarCategories','sortConfig'=>'[{\"sortby\":\"name\"}]','tpl'=>'@CODE:[[+name]]==[[+id]]','outputSeparator'=>'||'));",
          "default":""
        }
      ]
    },
    {
      "MIGX_id":2,
      "caption":"[[%migxcal.repeatings]]",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":1,
          "field":"Event_startdate",
          "caption":"[[%migxcal.repeatings_start]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"date",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":2,
          "field":"Event_repeatenddate",
          "caption":"[[%migxcal.repeatings_end]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"date",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        }
      ]
    }
  ],
  "contextmenus":"",
  "actionbuttons":"",
  "columnbuttons":"",
  "filters":"[]",
  "extended":{
    "migx_add":"",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"migxcalendar_movedate",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "actionbuttonsperrow":4,
    "winbuttonslist":"",
    "extrahandlers":"",
    "filtersperrow":4,
    "packageName":"migxcalendars",
    "classname":"migxCalendarDates",
    "task":"dragdropdate",
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
    "joins":[
      {
        "alias":"Event"
      }
    ],
    "cmpmaincaption":"",
    "cmptabcaption":"",
    "cmptabdescription":"",
    "cmptabcontroller":"",
    "winbuttons":[
      {
        "button":"migxcalcancel"
      },
      {
        "button":"migxcaldoneandclose"
      }
    ],
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":"[]",
  "createdby":1,
  "createdon":"2014-03-17 16:53:19",
  "editedby":1,
  "editedon":"2014-03-26 07:52:58",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"2014-03-17 01:00:00",
  "publishedby":0
}