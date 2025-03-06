document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("dropButton");
    const container = document.getElementById("container");
    
    button.addEventListener("click", () => {
        const object = document.createElement("div");
        object.classList.add("falling-object");
        
        // ランダムな位置に配置
        const startX = Math.random() * (container.clientWidth - 50);
        object.style.left = `${startX}px`;
        
        container.appendChild(object);
        
        // アニメーション後に要素を削除
        object.addEventListener("animationend", () => {
            object.remove();
        });
    });
});
