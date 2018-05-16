/**
 * Created by Administrator on 2015/4/15.
 * 数据操作记录
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;


var SystemConfigSchema = new Schema({
    _id: {
        type: String,
        
        'default': shortid.generate
    },
    date: { type: Date, default: Date.now },
    siteName: { type: String, default: '十七 文创社区' },
    siteDomain: { type: String, default: '' },
    siteDiscription: { type: String, default: '文字,创作,社区' },
    siteKeywords: String,
    siteEmailServer: String,
    siteEmail: String,
    siteEmailPwd: String,
    registrationNo: { type: String, default: '' },
    mongodbInstallPath: String,
    databackForderPath: String
});

var SystemConfig = mongoose.model("SystemConfig", SystemConfigSchema);

module.exports = SystemConfig;

