export const workflows = [
 {id:'image-sales-video',title:'单图带货视频',subtitle:'一张产品图，开始一支带货短片',icon:'product',color:'#e98555',inputHint:'上传产品图，告诉我产品名称、真实卖点和想要的表达方式。',prompts:['用这张产品图做一条15秒带货视频','先给我三个口播脚本方向'],inputs:['产品图','真实卖点','确认后的脚本']},
 {id:'video-remake',title:'视频1:1复刻',subtitle:'拆解参考，让每个镜头有据可依',icon:'remake',color:'#8290b4',inputHint:'上传参考视频和替换素材，描述要保留的镜头、动作和声音。',prompts:['先拆解参考视频的镜头','保留节奏，替换为我的产品'],inputs:['参考视频','替换素材','复刻要求']},
 {id:'lulu-animation',title:'噜噜动漫',subtitle:'角色、故事与镜头一起创作',icon:'lulu',color:'#bf966a',inputHint:'上传噜噜角色图，告诉我故事，也可以上传要复刻的参考片。',prompts:['用这些角色做一段有反转的故事','先设计角色一致的分镜'],inputs:['角色图','故事或参考视频']},
 {id:'auto-edit',title:'自动剪辑',subtitle:'从口播素材到清晰的表达',icon:'edit',color:'#729e8e',inputHint:'上传口播视频和可选字幕，告诉我想保留或删除的片段。',prompts:['查看素材，给我剪辑建议','按确认的时间段剪辑并导出'],inputs:['口播视频','字幕或剪辑时间段']},
 {id:'vox-video',title:'Vox风格视频',subtitle:'让知识变成运动的纸张与图解',icon:'paper',color:'#be9259',inputHint:'提供讲解稿、图片和旁白，先确认分镜与每段的时间。',prompts:['把这段文案变成纸张拼贴讲解','先做一版可编辑的动画分镜'],inputs:['讲解稿','旁白或时间轴']},
 {id:'sticker-talk',title:'动画贴纸口播',subtitle:'让重点在合适的时刻出现',icon:'sticker',color:'#aa83a8',inputHint:'上传口播视频，再提供带时间的字幕或想强调的句子。',prompts:['用动态贴纸突出这几个重点','保留原声，增加字幕和卡片动画'],inputs:['口播视频','字幕时间轴']},
 {id:'digital-human',title:'数字人口播',subtitle:'从一段文案到数字人与动画',icon:'avatar',color:'#789bb5',inputHint:'提供确认后的口播稿，以及已有的数字人和声音配置。',prompts:['先优化我的数字人口播稿','把口播做成带图解的讲解视频'],inputs:['口播稿','已配置数字人和声音']},
 {id:'motion-effects',title:'动画效果',subtitle:'把文字和图片做成可编辑的动效',icon:'motion',color:'#8ca377',inputHint:'告诉我要展示的文字或上传图片，选择纸页、卡片、箭头或关键词动效。',prompts:['做一段关键词和卡片入场动画','用图片做一个纸张拼贴开场'],inputs:['文字或图片','效果要求']}
];
export const workflowById = id => workflows.find(w=>w.id===id);
export const statusLabels={'needs-input':'待补充',planning:'策划中','awaiting-approval':'待确认',running:'执行中','awaiting-review':'待验收',completed:'已完成',failed:'失败',blocked:'需要处理'};
