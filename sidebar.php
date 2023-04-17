<div id="sidebar" class="span3">
	
		<ul id="sideManu" class="nav nav-tabs nav-stacked">
			<li class="subMenu open"><a> ELECTRONIQUES [230]</a>
			
   
      
				<ul>
				<?php   while ($a = $stmt->fetch()) {  ?> 
				<li><a class="active" href="products.php ?id=<?= $a["id_categories"]?>"><i class="icon-chevron-right"></i><?= $a["nom"]?> </a></li>
				<?php } ?>
			</ul>
		
			</li>
			
			
			
		</ul>
		<br/>
		  <div class="thumbnail">
			<img src="themes/images/products/panasonic.jpg" alt="Bootshop panasonoc New camera"/>
			<div class="caption">
			  <h5></h5>
				
			</div>
		  </div><br/>
			
			<div class="thumbnail">
				<img src="themes/images/payment_methods.png" title="Bootshop Payment Methods" alt="Payments Methods">
				<div class="caption">
				  <h5>Payment Methods</h5>
				</div>
			  </div>
	</div>