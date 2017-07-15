/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /**
 * Ddj sample transaction processor function.
 * @param {org.dltdojo.ex.DdjTransaction} tx The ddj sample transaction instance.
 * @transaction
 */
function ddjTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.value;
    var oldFoo = tx.asset.foo;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;
    tx.asset.foo = tx.newFoo;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.dltdojo.ex.DdjAsset')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.dltdojo.ex', 'DdjEvent');
            event.asset = tx.asset;
            event.oldValue = oldValue;
            event.newValue = tx.newValue;
            event.oldFoo = oldFoo;
            event.newFoo = tx.newFoo;
            emit(event);

        });

}

/**
 * Sample transaction processor function.
 * @param {org.dltdojo.ex.SampleTransaction} tx The sample transaction instance.
 * @transaction
 */
function sampleTransaction(tx) {

    // Save the old value of the asset.
    var oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    return getAssetRegistry('org.dltdojo.ex.SampleAsset')
        .then(function (assetRegistry) {

            // Update the asset in the asset registry.
            return assetRegistry.update(tx.asset);

        })
        .then(function () {

            // Emit an event for the modified asset.
            var event = getFactory().newEvent('org.dltdojo.ex', 'SampleEvent');
            event.asset = tx.asset;
            event.oldValue = oldValue;
            event.newValue = tx.newValue;
            emit(event);

        });

}
