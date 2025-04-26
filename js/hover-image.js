document.addEventListener('DOMContentLoaded', function() {
  // 创建模态框元素
  const modal = document.createElement('div');
  modal.id = 'imageModal';
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.zIndex = '1000';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.overflow = 'auto';
  modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  
  // 创建模态框内容
  const modalContent = document.createElement('div');
  modalContent.style.margin = 'auto';
  modalContent.style.display = 'block';
  modalContent.style.maxWidth = '80%';
  modalContent.style.maxHeight = '80%';
  modalContent.style.position = 'relative';
  modalContent.style.top = '50%';
  modalContent.style.transform = 'translateY(-50%)';
  modalContent.style.textAlign = 'center';
  
  // 创建关闭按钮
  const closeBtn = document.createElement('span');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '-30px';
  closeBtn.style.right = '0';
  closeBtn.style.color = 'white';
  closeBtn.style.fontSize = '35px';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.style.cursor = 'pointer';
  
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };
  
  // 创建图片元素
  const modalImg = document.createElement('img');
  modalImg.id = 'modalImg';
  modalImg.style.maxWidth = '100%';
  modalImg.style.maxHeight = '80vh';
  modalImg.style.border = '2px solid white';
  modalImg.style.borderRadius = '4px';
  
  // 组装模态框
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(modalImg);
  modal.appendChild(modalContent);
  
  // 点击模态框背景关闭
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  };
  
  // 添加到body
  document.body.appendChild(modal);
  
  // 全局函数用于显示模态框
  window.showImageModal = function(imageSrc) {
    const img = document.getElementById('modalImg');
    img.src = imageSrc;
    modal.style.display = 'block';
  };
  
  // 查找所有带有[hover-image=xxx]属性的链接
  const hoverLinks = document.querySelectorAll('a[hover-image]');
  
  hoverLinks.forEach(link => {
    const imagePath = link.getAttribute('hover-image');
    if (!imagePath) return;
    
    // 设置点击事件
    link.addEventListener('click', function(e) {
      e.preventDefault();
      showImageModal(imagePath);
    });
    
    // 创建图片容器
    const imageContainer = document.createElement('div');
    imageContainer.className = 'hover-image';
    
    // 创建图片元素
    const image = document.createElement('img');
    image.src = imagePath;
    image.alt = '悬停显示图片';
    image.style.maxWidth = '100%';
    
    // 添加图片到容器
    imageContainer.appendChild(image);
    
    // 添加CSS类和图片容器到链接
    link.classList.add('hover-image-link');
    link.appendChild(imageContainer);
  });
}); 