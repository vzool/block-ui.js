const BlockUI = function(elementId)
{
    return {
        
        blocked: function()
        {
            const element = document.getElementById(elementId);
            const blocker = element.children[element.childElementCount - 1];
            return blocker.classList.contains('vzool-blockui');
        },

        show: function()
        {
            const image = document.vzool_blockui_image || "loader.gif";
            const background = document.vzool_blockui_background || '#121111';
            const color = document.vzool_blockui_color || '#ffffff';
            if(this.blocked()) return;
            var blocker = document.createElement('div');
            blocker.id = 'vzool-blockui-' + Date.now();
            blocker.setAttribute('class', 'vzool-blockui');
            blocker.style.cssText = `background:url(${image}) no-repeat center center;background-color:${background};color:${color};border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center;`;
            document.getElementById(elementId).appendChild(blocker);
            return blocker.id;
        },

        message: function(message = '')
        {
            const element = document.getElementById(elementId);
            const blocker = element.children[element.childElementCount - 1];
            if(this.blocked()) return blocker.innerHTML = message; return false;
        },
        
        hide: function()
        {
            const element = document.getElementById(elementId);
            if(this.blocked()) return element.removeChild(element.children[element.childElementCount - 1]); return false;
        },
    };
};